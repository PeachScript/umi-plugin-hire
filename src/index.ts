import { IApi } from 'umi';
import path from 'path';

export default (api: IApi) => {
  api.describe({
    key: 'hire',
    config: {
      schema(joi) {
        return joi.object({
          title: joi.string().required(),
          content: joi.string().required(),
          email: joi.string().required(),
          slogan: joi.string().required(),
        });
      },
      onChange: api.ConfigChangeType.regenerateTmpFiles,
    },
    enableBy: api.EnableBy.config,
  });

  api.addEntryCode(() => `require("${
    api.utils.winPath(path.join(__dirname, 'sideTip.js'))
  }").default(${
    JSON.stringify(api.config.hire)
  })`);
}
