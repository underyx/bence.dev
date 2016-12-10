task :default => :build

task :build do
  sh "bundle exec jekyll build"
end

task :test => :build
task :test do
  require 'html-proofer'
  HTMLProofer.check_directory("_site", {
    :check_favicon => true,
    :check_html => true,
    :check_opengraph => true,
		:assume_extension => true
  }).run
end
