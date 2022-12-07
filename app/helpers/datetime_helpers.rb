# frozen_string_literal: true

module DateTimeHelper
  # get time from integer
  def self.get_time(num)
    temp_hour = (num / 60).truncate.to_s
    hour = temp_hour.length == 1 ? "0#{temp_hour}" : temp_hour
    min = (num % 60).zero? ? '00' : num % 60
    "#{hour}:#{min}"
  end
end
