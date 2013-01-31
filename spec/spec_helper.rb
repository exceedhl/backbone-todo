$:.unshift(File.dirname(__FILE__))

require 'capybara/rspec'
require 'capybara/poltergeist'

Capybara.current_driver = :poltergeist
Capybara.app_host = 'http://localhost:8000'
Capybara.javascript_driver = :poltergeist

include Capybara::DSL
