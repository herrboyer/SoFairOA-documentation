# Step 6: Trigger software archive using API (“Save code now”)

Once validated, the repository issues a 
[save code now](https://archive.softwareheritage.org/api/1/origin/save/doc/) request to 
Software Heritage.

## Context

To ensure the software artefact exists in the archive and the latest snapshot of the
full code repository, including all branches and releases, is archived, the Open Access
infrastructure needs to trigger a 
[save code now](https://archive.softwareheritage.org/api/1/origin/save/doc/) request to 
Software Heritage.

**The trigger:** URL identified for save code now.

**End result:** task scheduled for archival.

## Action

Link to API doc:
[https://archive.softwareheritage.org/api/1/origin/save/doc/](https://archive.softwareheritage.org/api/1/origin/save/doc/).

Creating a save request by sending an API POST request to
`https://archive.softwareheritage.org/api/1/origin/save/[visit_type]/url/[origin_url]/`
where path parameters `visit_type` is one of `bzr`, `cvs`, `git`, `hg`, or
`svn` type, and `origin_url` is the code repository URL, and without any body
nor query parameter. Returning a JSON object containing properties (among
others) `id`, `request_url`, `save_request_status`, `note`.

## Edge cases

* URL or SWHID aren’t available
    * Rejected save code now request and rejected deposit

### Error cases

* URL available but yields `404`
    * Rejected save code now request and rejected deposit
