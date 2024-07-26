[![Tags](https://img.shields.io/github/actions/workflow/status/cssnr/json-key-value-check-action/tags.yaml?logo=github&logoColor=white&label=tags)](https://github.com/cssnr/json-key-value-check-action/actions/workflows/tags.yaml)
[![Test](https://img.shields.io/github/actions/workflow/status/cssnr/json-key-value-check-action/test.yaml?logo=github&logoColor=white&label=test)](https://github.com/cssnr/json-key-value-check-action/actions/workflows/test.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_json-key-value-check-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_json-key-value-check-action)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/json-key-value-check-action?logo=github)](https://github.com/cssnr/json-key-value-check-action/releases/latest)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/json-key-value-check-action?logo=github&logoColor=white&label=updated)](https://github.com/cssnr/json-key-value-check-action/graphs/commit-activity)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/json-key-value-check-action?logo=htmx&logoColor=white)](https://github.com/cssnr/json-key-value-check-action)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&logoColor=white)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)

# JSON Key Value Check Action

Check that JSON Key's Values Match Provided Values.

* [Inputs](#Inputs)
* [Examples](#Examples)
* [Support](#Support)
* [Contributing](#Contributing)

> [!NOTE]  
> Please submit
> a [Feature Request](https://github.com/cssnr/json-key-value-check-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/json-key-value-check-action/issues) if you find any bugs.

## Inputs

| input     | required | default | description                    |
|-----------|----------|---------|--------------------------------|
| file      | **Yes**  | -       | JSON File Path to Validate     |
| keys      | **Yes**  | -       | Keys to Check, One per Line    |
| values    | **Yes**  | -       | Values to Verify, One per Line |
| seperator | No       | `.`     | Nested Key Seperator           |

For multiple `keys` and `values` use new lines with a yaml `|`.

## Examples

```yaml
- name: "Verify JSON"
  uses: cssnr/json-key-value-check-action@master
  with:
    file: manifest.json
    keys: version
    values: ${{ github.ref_name }}
```

Same as above but also setting an additional key value pair.

```yaml
- name: "Verify JSON"
  uses: cssnr/json-key-value-check-action@master
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
- name: "Verify JSON"
  uses: cssnr/json-key-value-check-action@master
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
- Provide General
  Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback)

# Contributing

Currently, the best way to contribute to this project is to star this project on GitHub.

Additionally, you can support other GitHub Actions I have published:

- [VirusTotal Action](https://github.com/cssnr/virustotal-action)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action)
- [Portainer Stack Deploy](https://github.com/cssnr/portainer-stack-deploy-action)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action)

For a full list of current projects to support visit: [https://cssnr.github.io/](https://cssnr.github.io/)
