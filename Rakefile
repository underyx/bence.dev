task :default => :build

task :build do
  sh "bundle exec jekyll build"
end

task :test => :build
task :test do
  require 'html/proofer'
  HTML::Proofer.new("./_site", {
    :verbose => true,
    :check_html => true,
    :check_favicon => true,
    :href_ignore => [/^.*linkedin\.com.*$/, /^\//]
  }).run
end
