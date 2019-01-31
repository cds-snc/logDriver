workflow "CI/CD" {
  on = "push"
  resolves = ["Publish"]
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

action "Publish" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Is master"]
  args = "run release"
  secrets = ["NPM_AUTH_TOKEN"]
}
