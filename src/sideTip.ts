import './sideTip.less';

const LS_KEY = 'umi-plugin-hire:closed-deadline';

interface sideTipOpts {
  title: string;
  content: string;
  email: string;
  slogan: string;
}

class SideTip {
  /**
   * outer container element
   */
  container = document.createElement('div');

  /**
   * side button element
   */
  sideBtn = document.createElement('button');

  /**
   * side close button element
   */
  sideCloseBtn = document.createElement('button');

  /**
   * side content element
   */
  sideContent = document.createElement('div');

  constructor(opts: sideTipOpts) {
    if (this.shouldOpen()) {
      this.init(opts);
    }
  }

  init(opts: sideTipOpts) {
    // init classNames
    this.container.className = 'plugin-hire-side-tip initial';
    this.sideBtn.className = 'plugin-hire-side-tip-btn';
    this.sideCloseBtn.className = 'plugin-hire-side-tip-btn-close';
    this.sideContent.className = 'plugin-hire-side-tip-content';

    // init contents
    this.sideContent.innerHTML = `
<article>
  <h3>${opts.title}</h3>
  <p>${opts.content}</p>
  <a href="mailto:${opts.email}?body%3D%0A%0A%0A%3C!--%20sent%20from%20umi-plugin-hire%20--%3E">
    发送简历
  </a>
</article>`;
    this.sideCloseBtn.setAttribute('title', '一周内不再显示');
    this.sideContent.setAttribute('data-slogan', opts.slogan);
    this.container.appendChild(this.sideBtn);
    this.container.appendChild(this.sideCloseBtn);
    this.container.appendChild(this.sideContent);

    // insert into document
    document.body.appendChild(this.container);

    // init events
    this.sideBtn.addEventListener('click', () => {
      this.container.classList.toggle('active');
      this.container.classList.remove('initial');
    });

    this.sideCloseBtn.addEventListener('click', () => {
      this.destory();
    });

    setTimeout(() => {
      this.container.classList.remove('initial');
    }, 5000);
  }

  shouldOpen() {
    return Date.now() > Number(localStorage.getItem(LS_KEY));
  }

  destory() {
    this.container.parentNode?.removeChild(this.container);
    localStorage.setItem(LS_KEY, String(Date.now() + (1000 * 60 * 60 * 24 * 7)));
  }
}

export default (opts: sideTipOpts) => new SideTip(opts);
