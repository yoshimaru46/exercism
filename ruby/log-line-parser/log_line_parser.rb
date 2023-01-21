class LogLineParser
  attr_reader :log_level, :message

  def initialize(line)
    level, line = line.split(":")
    @message = line.strip
    @log_level = level.gsub(/\[|\]/, "").downcase
  end

  def reformat
    "#{@message} (#{@log_level})"
  end
end
