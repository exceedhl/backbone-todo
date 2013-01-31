require "spec_helper"

describe "todo", :type => :feature, :js => true do
  it "should list all tasks" do
    visit '/index.html#task'
    find("tr td:nth-of-type(2)").text.should == "task 1"
  end
end
