require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg' # to connect with postgres

require_relative 'db_config'
require_relative 'models/art_site'


# index (home page) and define variable art site
get '/' do

  @art_sites = ArtSite.all
  erb :index

end

# getting the form to add art site
get '/art_sites/new' do

  erb :new
end

# save new art site with params
post '/art_sites'  do

  @art_site = ArtSite.new
  @art_site.artist_name = params[:artist_name]
  @art_site.address = params[:address]
  @art_site.art_photo = params[:art_photo]
  @art_site.artist_url = params[:artist_url]
  @art_site.save

  redirect to '/'

end


