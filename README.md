# umi-plugin-hire

A umi/dumi plugin for insert a side tip for hire.

<img src="https://gw.alipayobjects.com/zos/bmw-prod/c1dfb945-3c41-42fc-9def-3d0530db3e6e/km1ey2in_w1504_h1070.jpeg" width="512" />

Online example: [https://d.umijs.org](https://d.umijs.org)

## Usage

Install this plugin into `devDependencies` of `package.json`, umi/dumi will load it automatically:

```bash
$ npm i umi-plugin-hire -D
```

Then configure the hire informations in `config/config.ts` or `.umirc.ts`:

```typescript
// .umirc.ts
export default {
  hire: {
    title: 'Waiting for you',
    content: `
<p>Job Description:</p>
<ul>
  <li>balabala</li>
  <li>balabala</li>
  <li>balabala</li>
</ul>`,
    email: 'youremail@example.com',
    slogan: 'Find a nice job?',
  },
}
```

That's all!
