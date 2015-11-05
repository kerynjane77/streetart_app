require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'streetart_app'
}


ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || options)