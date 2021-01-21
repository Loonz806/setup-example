# Setup Example

Showing some setup that is needed for adding jest, testing-library, some eslint configs and also some pre/push tasks using husky/lint-staged

### inspired by Ken C. Dodds Javascript Testing

#### Eslint ( Static Code Analysis )

_having good linting practices in a greenfield project is always a good way to establish consistent coding patterns and fixing errors_
Eslint Command

`npm run lint`

or automatically if a husky git hook is enabled via `.huskyrc` file, if linting is bypassed with `--no-verify` it is caught with
`.lintstagedrc` this also is helpful with folks who don't use IDE's and perhaps use text-editors or other tooling. It is also in the CI/CD checks in Github Actions upstream

#### Prettier ( Code Formatting without Opinions )

_having unformatted code automatically become formatted by respecting linting rules first and then prettier default settings_
Prettier Command

`npm run pretty`

or automatically if a husky git hook is enabled via `.huskyrc` file, if linting is bypassed with `--no-verify` it is caught with
`.lintstagedrc` this also is helpful with folks who don't use IDE's and perhaps use text-editors or other tooling. It is also in the CI/CD checks in Github Actions upstream

#### Jest/React Testing-Library

_addresses unit testing of any application running React by using two libraries that complement each other Jest and React Testing Library_
Test Command

`npm run test`

or automatically if a husky git hook is enabled via `.huskyrc` file, if linting is bypassed with `--no-verify` it is caught with
`.lintstagedrc` this also is helpful with folks who don't use IDE's and perhaps use text-editors or other tooling. It is also in the CI/CD checks in Github Actions upstream

#### Commitlint

_addresses meaningless commit history that often doesn't speak to what ticket, concept or idea nor attached to JIRA automatically on code changes_

Runs automatically on commit-msg hook, strongly opinionated but not enforced.

#### CodeCov

_reports line coverage for repository by using a reporter that is pushed to an reporting suite and badged locally_

Runs on successful build chain in Github Actions
