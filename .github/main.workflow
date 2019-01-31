workflow "CI/CD" {
  on = "push"
  resolves = [
    "docker://culturehq/actions-yarn:latest",
    "Is master",
  ]
}

action "Install" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "install"
}

action "Test" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Install"]
  args = "test"
}

action "Is master" {
  uses = "actions/bin/filter@c6471707d308175c57dfe91963406ef205837dbd"
  needs = ["Test"]
  args = "branch master"
}

action "docker://culturehq/actions-yarn:latest" {
  uses = "docker://culturehq/actions-yarn:latest"
  needs = ["Is master"]
  secrets = ["NPM_AUTH_TOKEN"]
  env = {
    GIT_AUTHOR_NAME = "CDS Actions"
    GIT_AUTHOR_EMAIL = "actions@cds-snc.ca"
    GIT_COMMITTER_NAME = "CDS Actions"
    GIT_COMMITTER_EMAIL = "actions@cds-snc.ca"
  }
}
