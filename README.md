[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Github Actions CI](https://github.com/Loonz806/setup-example/workflows/Github%20Actions%20CI/badge.svg)
[![codecov](https://codecov.io/gh/Loonz806/setup-example/branch/master/graph/badge.svg?token=Z6SR75P1WT)](https://codecov.io/gh/Loonz806/setup-example)
[![Known Vulnerabilities](https://snyk.io/test/github/Loonz806/setup-example/badge.svg)](https://snyk.io/test/github/Loonz806/setup-example)

# Setup Example

To install

`npm install`

Showing some setup that is needed for adding jest, testing-library, some eslint configs and also some pre/push tasks using husky/lint-staged

### inspired by Ken C. Dodds [Javascript Testing](https://testingjavascript.com/)

_Utilities to aid in enforcement_

- [Lint-Staged](https://www.npmjs.com/package/lint-staged) ( catch unlinted files before they get pushed into expensive build times in CI )
- [Husky](https://www.npmjs.com/package/husky) ( if you use git, this is very handy to have actions trigger )
- [Github Actions](https://docs.github.com/en/actions) ( Githubs CI tool, tasker )
- [Editor Config](https://editorconfig.org/) ( Not all IDE's are configured the same )

#### [Eslint](https://eslint.org/) ( Static Code Analysis )

_having good linting practices in a greenfield project is always a good way to establish consistent coding patterns and fixing errors_
_in this example standard is being used, less config the better_

Eslint Command

`npm run lint`

or automatically if a husky git hook is enabled via `.huskyrc` file, if linting is bypassed with `--no-verify` it is caught with
`.lintstagedrc` this also is helpful with folks who don't use IDE's and perhaps use text-editors or other tooling. It is also in the CI/CD checks in Github Actions upstream

#### [Prettier](https://prettier.io/) ( Opinionated code formatter )

_having unformatted code automatically become formatted by respecting linting rules first and then prettier default settings_
_you can see the configuration by reviewing the .eslintrc file_

Prettier Command

`npm run pretty`

or automatically if a husky git hook is enabled via `.huskyrc` file, if formatting is bypassed with `--no-verify` it is caught with
`.lintstagedrc` this also is helpful with folks who don't use IDE's and perhaps use text-editors or other tooling. It is also in the CI/CD checks in Github Actions upstream

#### [Jest](https://jestjs.io/)/[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) ( Unit testing Functions and also DOM Assertion )

_addresses unit testing of any application running React by using two libraries that complement each other Jest and React Testing Library_

Test Command

`npm run test`

or automatically if a husky git hook is enabled via `.huskyrc` file, if testing is bypassed with `--no-verify` it is caught in the CI/CD checks in Github Actions upstream

#### [Commitlint](https://commitlint.js.org/#/) ( Commit messages that connect to JIRA tickets )

_addresses meaningless commit history that often doesn't speak to what ticket, concept or idea nor attached to JIRA automatically on code changes_

Runs automatically on commit-msg hook, strongly opinionated but not enforced. Configuration file is `commitlint.config.js` and is envoked via the `.huskyrc` file

#### [CodeCov](https://about.codecov.io/) ( Line coverage of unit tests and files )

Codecov Command

`npm run coverage`

_reports line coverage for repository by using a reporter that is pushed to an reporting suite and badged locally_

Runs on successful build chain in Github Actions

#### [Github Actions](https://docs.github.com/en/actions) ( Some github hosted CI actions that can be run branch dependant )

_runs linting, testing and building and deployment to github pages on primary branch_

Similar to other tools like TravisCI, CircleCI, GitLab, Bitbucket, Codepipeline etc. Configuration found in `.github/workflows`
