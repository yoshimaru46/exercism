class LogLineParser
  def initialize(line)
    @line = line
  end

  def message
    @line.split(": ").last.strip
  end

  def log_level
    @line.split(": ").first.downcase.gsub(/\[|\]/, "")
  end

  def reformat
    message + " (" + log_level + ")"
  end
end
