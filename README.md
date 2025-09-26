[![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/json-key-value-check-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/json-key-value-check-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/json-key-value-check-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/json-key-value-check-action/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/json-key-value-check-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/json-key-value-check-action/releases/latest)
[![GitHub Dist Size](https://img.shields.io/github/size/cssnr/json-key-value-check-action/dist%2Findex.js?logo=bookstack&logoColor=white&label=dist%20size)](https://github.com/cssnr/json-key-value-check-action/blob/master/src/index.ts)
[![Workflow Release](https://img.shields.io/github/actions/workflow/status/cssnr/json-key-value-check-action/release.yaml?logo=cachet&label=release)](https://github.com/cssnr/json-key-value-check-action/actions/workflows/release.yaml)
[![Workflow Test](https://img.shields.io/github/actions/workflow/status/cssnr/json-key-value-check-action/test.yaml?logo=cachet&label=test)](https://github.com/cssnr/json-key-value-check-action/actions/workflows/test.yaml)
[![Workflow Lint](https://img.shields.io/github/actions/workflow/status/cssnr/json-key-value-check-action/lint.yaml?logo=cachet&label=lint)](https://github.com/cssnr/json-key-value-check-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_json-key-value-check-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_json-key-value-check-action)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/json-key-value-check-action?logo=github&label=updated)](https://github.com/cssnr/json-key-value-check-action/pulse)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/json-key-value-check-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/json-key-value-check-action)
[![GitHub Contributors](https://img.shields.io/github/contributors/cssnr/json-key-value-check-action?logo=github)](https://github.com/cssnr/json-key-value-check-action/graphs/contributors)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/json-key-value-check-action?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/json-key-value-check-action?logo=htmx)](https://github.com/cssnr/json-key-value-check-action)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/json-key-value-check-action?logo=github)](https://github.com/cssnr/json-key-value-check-action/discussions)
[![GitHub Forks](https://img.shields.io/github/forks/cssnr/json-key-value-check-action?style=flat&logo=github)](https://github.com/cssnr/json-key-value-check-action/forks)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/json-key-value-check-action?style=flat&logo=github)](https://github.com/cssnr/json-key-value-check-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# JSON Key Value Check Action

- [Inputs](#Inputs)
- [Examples](#Examples)
- [Support](#Support)
- [Contributing](#Contributing)

Check that JSON Key's Values Match Provided Values.

> [!NOTE]  
> Please submit a [Feature Request](https://github.com/cssnr/json-key-value-check-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/json-key-value-check-action/issues) if you find any bugs.

## Inputs

| input     | required | default | description                    |
| --------- | :------: | ------- | ------------------------------ |
| file      | **Yes**  | -       | JSON File Path to Validate     |
| keys      | **Yes**  | -       | Keys to Check, One per Line    |
| values    | **Yes**  | -       | Values to Verify, One per Line |
| seperator |    -     | `.`     | Nested Key Seperator           |

For multiple `keys` and `values` use new lines with a yaml `|`.

## Examples

```yaml
- name: 'Verify JSON'
  uses: cssnr/json-key-value-check-action@v2
  with:
    file: manifest.json
    keys: version
    values: ${{ github.ref_name }}
```

Same as above but also setting an additional key value pair.

```yaml
- name: 'Verify JSON'
  uses: cssnr/json-key-value-check-action@v2
  with:
    file: manifest.json
    keys: |
      version
      version_name
    values: |
      ${{ github.ref_name }}
      "Release ${{ github.ref_name }}"
```

Set a nested key and use file from different directory.

```yaml
- name: 'Verify JSON'
  uses: cssnr/json-key-value-check-action@v2
  with:
    file: src/manifest.json
    keys: |
      meta.version
    values: |
      "Release ${{ github.ref_name }}"
```

# Support

For general help or to request a feature, see:

- Q&A Discussion: https://github.com/cssnr/json-key-value-check-action/discussions/categories/q-a
- Request a Feature: https://github.com/cssnr/json-key-value-check-action/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results, you can:

- Report an Issue: https://github.com/cssnr/json-key-value-check-action/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback)

For more information, see the CSSNR [SUPPORT.md](https://github.com/cssnr/.github/blob/master/.github/SUPPORT.md#support).

# Contributing

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

If you would like to submit a PR, please review the [CONTRIBUTING.md](#contributing-ov-file).

Additionally, you can support other GitHub Actions I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)

<details><summary>❔ Unpublished Actions</summary>

These actions are not published on the Marketplace, but may be useful.

Generic Actions:

- [cssnr/draft-release-action](https://github.com/cssnr/draft-release-action) - Keep a draft release ready to publish.
- [cssnr/env-json-action](https://github.com/cssnr/env-json-action) - Convert env file to json or vice versa.
- [cssnr/get-commit-action](https://github.com/cssnr/get-commit-action) - Get the current commit with full details.

Specific Actions:

- [cssnr/push-artifacts-action](https://github.com/cssnr/push-artifacts-action) - Sync's artifacts to a remote host.
- [smashedr/update-release-notes-action](https://github.com/smashedr/update-release-notes-action) - Update release notes.

---

</details>

<details><summary>📝 Template Actions</summary>

These are basic action templates that I use for creating new actions.

- [js-test-action](https://github.com/smashedr/js-test-action?tab=readme-ov-file#readme) - JavaScript
- [py-test-action](https://github.com/smashedr/py-test-action?tab=readme-ov-file#readme) - Python
- [ts-test-action](https://github.com/smashedr/ts-test-action?tab=readme-ov-file#readme) - TypeScript
- [docker-test-action](https://github.com/smashedr/docker-test-action?tab=readme-ov-file#readme) - Docker Image

Note: The `docker-test-action` builds, runs and pushes images to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

---

</details>

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)
