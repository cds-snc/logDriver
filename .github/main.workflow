workflow "CI/CD" {
  on = "push"
  resolves = [
    "Is master",
    "Publish",
  ]
}

action "Install" {
  uses = "docker://culturehq/actions-yarn:latest"
  args = "install"
}

action "Test" {
  uses = "docker://culturehq/actions-yarn:latest"
  needs = ["Install"]
  args = "test"
}

action "Is master" {
  uses = "actions/bin/filter@c6471707d308175c57dfe91963406ef205837dbd"
  needs = ["Test"]
  args = "branch master"
}

action "Publish" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Is master"]
  secrets = ["NPM_AUTH_TOKEN"]
  env = {
    GIT_AUTHOR_NAME = "CDS Actions"
    GIT_AUTHOR_EMAIL = "actions@cds-snc.ca"
    GIT_COMMITTER_NAME = "CDS Actions"
    GIT_COMMITTER_EMAIL = "actions@cds-snc.ca"
  }
  args = "run release"
}
