# frozen_string_literal: true

class Appointment < ApplicationRecord
  #   attr_accessor :validate_timeframe

  validates :start, :end, presence: true
  #   validates :within_timeframe, if: :validate_timeframe

  #   def within_timeframe
  #     errors.add(:starts, 'Appointment can not be scheduled in past date') if start.to_date == Time.zone.today.to_date
  #   end
end
