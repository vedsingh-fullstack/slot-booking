# frozen_string_literal: true

class Api::V1::AppointmentsController < ApplicationController
  # GET /available-slots
  def available_slots
    @appointments = AppointmentService.available_slots(params[:date], params[:interval])

    render json: @appointments
  end

  # POST /appointments
  def create
    @appointment = Appointment.new(appointment_params)

    if @appointment.save
      render json: @appointment, status: :created
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  private

  # Only allow a list of trusted parameters through.
  def appointment_params
    params.require(:appointment).permit(:start, :end)
  end
end
