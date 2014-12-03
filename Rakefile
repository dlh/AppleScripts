require "rake/clean"

BUILD_DIRECTORY = "build"
SOURCES = FileList["**/*/*.js", "**/*/*.applescript"].exclude(/^#{BUILD_DIRECTORY}/)
EXTENSION_TO_LANGUAGE = {
  ".applescript" => "AppleScript",
  ".js" => "JavaScript"
}
CLOBBER.include(BUILD_DIRECTORY)

SOURCES.each do |source|
  compiled = File.join(BUILD_DIRECTORY, source).ext(".scpt")
  file(compiled => [directory(compiled.pathmap("%d")), source]) do |t|
    sh("osacompile", "-l", EXTENSION_TO_LANGUAGE[source.pathmap("%x")], "-o", compiled, source)
  end
  task(:compile => compiled)
end

desc("Compile all scripts")
task(:compile)

task(:default => :compile)
