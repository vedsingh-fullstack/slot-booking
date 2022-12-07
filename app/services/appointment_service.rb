# frozen_string_literal: true

require_relative '../helpers/datetime_helpers'

module AppointmentService
  class << self
    include DateTimeHelper
    def available_slots(date, interval)
      date = Time.parse(date).utc
      # find the booked record from db
      already_booked_slots = Appointment.where(start: date.beginning_of_day..date.end_of_day)

      all_day_times = get_all_day_times(interval)

      already_booked_slots.each do |slot|
        start_index = all_day_times.index((slot.start.hour * 60) + slot.start.min)
        end_index = all_day_times.index((slot.end.hour * 60) + slot.end.min)
        all_day_times.slice!(start_index..end_index)
      end
      # convert back to time slot in hh:mm format
      all_day_times.map { |t| DateTimeHelper.get_time(t) }
    end

    # function to return all times based on interval
    def get_all_day_times(interval)
      times = 4
      sums = 15
      start = 0

      case interval
      when 15
        times = 4
        sums = 15
      when 30
        times = 2
        sums = 30
      when 60
        times = 1
        sums = 60
      end

      Array.new(24 * times).fill(0).map { |_t| start += sums }
    end
  end
end
