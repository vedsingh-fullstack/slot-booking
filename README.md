# Slot Booking App
- [Approach](https://miro.com/app/board/uXjVP8aX6yo=/)

## Getting Started

This instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- [PostgreSQL](https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-ruby-on-rails-application-on-macos)

### Installation

Download this repository or clone it using git

```
git clone https://github.com/vedsingh-fullstack/slot-booking.git
```

Navigate into the repository

```
cd slot-booking
```

#### 1. Database Configuration
Configure a postgres database before running the backend

```sh
brew install postgresql@14
```
Your Postgres server should ideally run as a service on your machine, in order
to have it running after system start:
```sh
brew services start postgresql@14
```

After cloning application repository and installing app you will have two additional databases: optisure_test and optisure_development
For these databases you will need to create new user so connection will be
possible:
```sh
psql postgres
```
```sql
CREATE ROLE testuser WITH SUPERUSER;
ALTER ROLE testuser WITH LOGIN;
ALTER ROLE testuser WITH PASSWORD 'admin@123';

```

#### 2. Create and setup the database

```
rails db:create
rails db:migrate
rails db:seeds

```

#### 3. Start the Rails server

You can start the rails server using the command given below.
```sh
bundle exec rails s
```

And now you can test the api with the following URL

List of available Slots

```sh
GET http://localhost:3000/api/v1/available-slots?date=2022-02-02T20:00:00.000Z&interval=15
```

Create Appointment with selected slots

```sh
POST http://localhost:3000/api/v1/appointments

{
    start: "2022-02-02T20:00:00.000Z",
    end: "2022-02-02T22:30:00.000Z"
}
```

#### 4. Start the react server


```sh
cd client
npm start
```

#### 5. Enable cors
Allow cors for react server in config/initializers/cors.rb  

```sh
origins 'http://localhost:3001'
```
