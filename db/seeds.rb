# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
User.destroy_all

@sadie = User.create!(first_name: 'Sadie',  last_name: 'Doyle', email: 'sadie@email.com', password: '123456')
@oliver = User.create!(first_name: 'Oliver',  last_name: 'Wylee', email: 'oliver@email.com', password: '123456')
@tamara = User.create!(first_name: 'Tamara',  last_name: 'Key', email: 'tamara@email.com', password: '123456')
@jake = User.create!(first_name: 'Jake',  last_name: 'Sloan', email: 'jake@email.com', password: '123456')
@dana = User.create!(first_name: 'Dana',  last_name: 'Peterson', email: 'dana@email.com', password: '123456')
@andie = User.create!(first_name: 'Andie', last_name: 'Wallace', email: 'andie@email.com', password: '123456')

puts "#{User.count} users created"

sadie1 = Post.create!(content: 'Added my new Silver Satin to the bathroom counter top. Brings everything together so nicely! Plants in the bathroom make my morning routine that much better.', image_url: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_silver-satin_gallery_small_all_all_07_720x.jpg?v=1629121920', user: @sadie)

oliver1 = Post.create!(content: 'I just got a new Birds of Paradise last week and I have to be honest, she is thriving. Had to put it by the best view in the new apartment. She also loves to listen to Bob Marley - I play some tracks everytime I water her.', image_url: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_bird-of-paradise_gallery_05_720x.jpg?v=1624309208', user: @oliver)

tamara1 = Post.create!(content: 'My snake laurentii looks perfect in this lighting! Picked it up this past weekend at the farmer’s market. It’s my first
one though.. any tips on how to better take care of this?', image_url: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_large-snake-plant-laurentii_gallery_04_720x.jpg?v=1624310218', user: @tamara)

puts "#{Post.count} posts created"