process.env.NODE_ENV = 'test';
import snowpackTestRunnerPlugin from '@snowpack/web-test-runner-plugin'

export default {
  plugins: [ snowpackTestRunnerPlugin() ],
};
