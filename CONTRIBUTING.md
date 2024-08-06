# Contributing to the documentation

Thank you for contributing to this documentation!

## Authors

This documentation is maintained by [TODO add authors].

## Communication

Communication takes place through tickets in [this repository](https://github.com/SoFairOA/documentation).

## How to contribute

### Report a bug or suggest an enhancement

Contributors may [fill an issue](https://github.com/SoFairOA/documentation/issues/new/choose) (required for major changes).

This issue may be discussed in this dedicated place and may lead to the opening of a PR (“Pull Request”).

### Submit changes

Changes can be made directly through the web interface or by forking and cloning the repository.

Contributors may [open a PR](https://github.com/SoFairOA/documentation/compare) (it can be opened directly for minor changes, such as markup and typo fixes).

This PR may be discussed in this dedicated place.

After agreement, Maintainers may merge the PR.

### Conventions

Always write a clear log message for your commits. One-line messages are fine for small changes, but significant changes should look like this:

    $ git commit -m "Subject of the commit
    >
    > One ore more paragraph(s) describing what changed and its impact."

A properly formed Git commit subject line should always be able to complete the following sentence: if applied, this commit will "Subject of the commit". For example :

    [if applied, this commit will] Add chapter on computing directory node hashes in SWHID
    [if applied, this commit will] Delete paragraph with outdated SWHID references
    [if applied, this commit will] Fix grammar in SWHID core identifier

Git itself uses this approach. When you merge something it will generate a commit message like "Merge branch...", or when reverting "Revert...".

[TODO rename commits]

Git itself uses this approach. When you merge something it will generate a commit message like "Merge branch...", or when reverting "Revert...".

### Legal notice

All contributions to the documentation [TODO add name] are submitted under the [Creative Commons Attribution 4.0 International license](LICENSE.txt).
Contributions to companion software tools and libraries are submitted under the open source license indicated in the corresponding software projects and files.

By making a contribution to this project, you certify that the contribution was created in whole or in part by you, and you have the right to submit it under the corresponding license.
You understand and agree that this project and the contribution are public and that a record of the contribution (including all personal information you submit with it, including your sign-off) is maintained indefinitely and may be redistributed consistent with this project or the license(s) involved.

To certify that your contribution complies with the above contribution conditions, a `Signed-off-by` line like the following (replace with your own identity):

    Signed-off-by: Author Name authoremail@example.com

must be included in every commit message.
Changes made through the web interface include this line. If you use the command line, you can do this by passing the `-s` flag to `git commit`.
