require "spec_helper"

describe "mocha", :type => :feature, :js => true do
  it "should run all tests successfully" do
    visit '/test.html'
    puts find(".failures em").text
  end
end
