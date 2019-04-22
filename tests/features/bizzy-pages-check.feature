Feature: Check Bizzy pages through link text

Background:
  Given user is at Bizzy homepage

@desktop @bizzy @home @clear @quit
Scenario: Check Home Page Title
  Then the homepage title is correct

@desktop @bizzy @customer @clear @quit
Scenario: Check Customer Registration Page Title
  When user click link text "Daftar Sekarang"
  Then user will see customer registration page