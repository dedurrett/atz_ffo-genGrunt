// Creates a character sheet for a randomly generated Grunt.
 
var genGrunt = genGrunt || {};
genGrunt.scriptVersion = 0.1;
genGrunt.randomNames = {
  maleNames: [
    'Aaron','Abdul','Abel','Abraham','Abram','Adam','Adan','Addison','Adolfo','Adonis','Adrian','Agustin','Ahmad','Ahmed','Aidan','Aiden','Alan','Albert','Alberto','Alden','Aldo','Alec','Alejandro','Alex','Alexander','Alexandro','Alexis','Alfonso','Alfred','Alfredo','Ali','Allan','Allen','Alonso','Alonzo','Alton','Alvaro','Alvin','Amari','Amir','Amos','Anderson','Andre','Andreas','Andres','Andrew','Andy','Anfernee','Angel','Angelo','Anthony','Antoine','Anton','Antonio','Antony','Antwan','Ari','Aric','Ariel','Armand','Armando','Armani','Arnold','Aron','Arron','Arthur','Arturo','Asa','Asher','Ashton','Aubrey','August','Augustus','Austen','Austin','Auston','Austyn','Avery','Axel',
    'Baby','Bailey','Barrett','Barry','Beau','Ben','Benito','Benjamin','Bennett','Benny','Bernard','Bernardo','Billy','Blaine','Blaise','Blake','Bo','Bobby','Brad','Braden','Bradford','Bradley','Bradly','Brady','Braeden','Brandan','Branden','Brandon','Brandyn','Branson','Brant','Braxton','Brayan','Brayden','Braydon','Brendan','Brenden','Brendon','Brennan','Brennen','Brennon','Brent','Brenton','Bret','Brett','Brian','Brice','Brock','Broderick','Brody','Bronson','Brooks','Bruce','Bryan','Bryant','Bryce','Bryon','Bryson','Byron',
    'Cade','Caden','Cain','Cale','Caleb','Calvin','Camden','Cameron','Camron','Carl','Carlo','Carlos','Carlton','Carson','Carter','Casey','Cecil','Cedric','Cesar','Chad','Chaim','Chance','Chandler','Charles','Charlie','Chase','Chauncey','Chaz','Chris','Christian','Christopher','Clarence','Clark','Clay','Clayton','Clifford','Clifton','Clint','Clinton','Clyde','Coby','Codey','Cody','Colby','Cole','Coleman','Coleton','Colin','Collin','Colt','Colten','Colton','Conner','Connor','Conor','Conrad','Cooper','Corbin','Cordell','Corey','Cornelius','Cortez','Cory','Coty','Courtney','Coy','Craig','Cristian','Cristobal','Cristopher','Cruz','Cullen','Curtis','Cyrus',
    'Dakota','Dakotah','Dale','Dallas','Dallin','Dalton','Damian','Damien','Damion','Damon','Dan','Dana','Dandre','Dane','Dangelo','Daniel','Danny','Dante','Daquan','Darian','Darien','Darin','Dario','Darion','Darius','Darnell','Darrell','Darren','Darrian','Darrien','Darrin','Darrion','Darrius','Darryl','Darwin','Daryl','Dashawn','Daulton','David','Davin','Davion','Davis','Davon','Davonte','Dawson','Dayton','Dean','Deandre','Deangelo','Deante','Deion','Dejuan','Demarco','Demarcus','Demetrius','Dennis','Denver','Denzel','Deon','Deondre','Deontae','Deonte','Dequan','Derek','Derick','Derrick','Deshaun','Deshawn','Desmond','Destin','Devan','Devante','Deven','Devin','Devon','Devonta','Devontae','Devonte','Devyn','Dewayne','Dexter','Diego','Dillan','Dillion','Dillon','Dimitri','Dion','Domenic','Dominic','Dominick','Dominik','Dominique','Don','Donald','Donavan','Donavon','Donnell','Donnie','Donovan','Dontae','Donte','Dorian','Douglas','Drake','Draven','Drew','Duane','Duncan','Dustin','Dusty','Dwayne','Dwight','Dylan','Dylon',
    'Earl','Easton','Eddie','Eddy','Edgar','Edgardo','Edmund','Eduardo','Edward','Edwin','Efrain','Efren','Eli','Elias','Eliezer','Elijah','Eliseo','Elisha','Elliot','Elliott','Ellis','Elmer','Elvis','Emanuel','Emiliano','Emilio','Emmanuel','Emmett','Enrique','Eric','Erich','Erick','Erik','Ernest','Ernesto','Ervin','Esteban','Estevan','Ethan','Eugene','Evan','Everett','Ezekiel','Ezequiel','Ezra',
    'Fabian','Felipe','Felix','Fernando','Fidel','Floyd','Forrest','Francis','Francisco','Frank','Frankie','Franklin','Fred','Freddie','Freddy','Frederick','Fredrick','Gabriel','Gage','Garett','Garret','Garrett','Garrison','Gary','Gavin','Gene','Geoffrey','George','Gerald','Gerard','Gerardo','German','Giancarlo','Gianni','Gilbert','Gilberto','Gino','Giovanni','Giovanny','Glen','Glenn','Gonzalo','Gordon','Grady','Graham','Grant','Grayson','Gregorio','Gregory','Greyson','Griffin','Guadalupe','Guillermo','Gunnar','Gunner','Gustavo','Guy',
    'Hakeem','Hans','Harley','Harold','Harrison','Harry','Harvey','Hassan','Hayden','Heath','Hector','Henry','Herbert','Heriberto','Herman','Hernan','Holden','Houston','Howard','Hudson','Hugh','Hugo','Humberto','Hunter',
    'Ian','Ibrahim','Ignacio','Infant','Irvin','Irving','Isaac','Isai','Isaiah','Isaias','Ishmael','Isiah','Isidro','Ismael','Israel','Issac','Ivan',
    'Jabari','Jace','Jack','Jackie','Jackson','Jacob','Jacoby','Jacques','Jade','Jaden','Jaime','Jairo','Jajuan','Jake','Jakob','Jaleel','Jalen','Jamal','Jamar','Jamarcus','Jamari','Jamel','James','Jameson','Jamie','Jamil','Jamison','Jaquan','Jared','Jaren','Jaret','Jarett','Jarod','Jaron','Jarred','Jarrett','Jarrod','Jarvis','Jason','Jasper','Javier','Javon','Javonte','Jaxon','Jay','Jayce','Jayden','Jaylan','Jaylen','Jaylin','Jaylon','Jayson','Jean','Jeff','Jefferson','Jeffery','Jeffrey','Jeremiah','Jeremy','Jermaine','Jerod','Jerome','Jerrod','Jerry','Jesse','Jessie','Jessy','Jesus','Jim','Jimmie','Jimmy','Joaquin','Joe','Joel','Joey','John','Johnathan','Johnathon','Johnnie','Johnny','Jon','Jonah','Jonas','Jonathan','Jonathon','Jordan','Jorden','Jordon','Jorge','Jose','Josef','Joseph','Josh','Joshua','Josiah','Josue','Jovan','Jovani','Jovanny','Juan','Jude','Julian','Julien','Julio','Julius','Junior','Justice','Justin','Justus','Justyn','Juwan',
    'Kade','Kaden','Kahlil','Kai','Kaleb','Kalvin','Kameron','Kane','Kareem','Karl','Kasey','Keandre','Keanu','Keaton','Keegan','Keenan','Keith','Kellen','Kelly','Kelton','Kelvin','Kenan','Kendall','Kendrick','Kennedy','Kenneth','Kenny','Kent','Kenton','Kenyon','Keon','Kerry','Keshawn','Keven','Kevin','Kevon','Keyon','Keyshawn','Khalid','Khalil','Kieran','Killian','Kirk','Kobe','Koby','Kody','Kolby','Kole','Kolton','Kordell','Korey','Kory','Kristian','Kristofer','Kristopher','Kurt','Kurtis','Kyle','Kyler',
    'Ladarius','Lamar','Lamont','Lance','Landen','Landon','Lane','Larry','Lawrence','Layne','Lee','Leland','Leo','Leon','Leonard','Leonardo','Leonel','Leroy','Leslie','Lester','Levi','Lewis','Liam','Lincoln','Lloyd','Logan','Lonnie','Loren','Lorenzo','Louis','Lucas','Luis','Lukas','Luke',
    'Mackenzie','Madison','Malachi','Malcolm','Malik','Manuel','Marc','Marcel','Marcelo','Marco','Marcos','Marcus','Mario','Marion','Mark','Markel','Markell','Markus','Marlon','Marques','Marquez','Marquis','Marquise','Marshall','Martin','Marvin','Mason','Mateo','Mathew','Matthew','Maurice','Mauricio','Maverick','Max','Maximilian','Maximillian','Maxwell','Melvin','Menachem','Micah','Michael','Micheal','Mickey','Miguel','Mike','Mikel','Miles','Milton','Misael','Mitchel','Mitchell','Mohamed','Mohammad','Mohammed','Moises','Montana','Morgan','Moses','Moshe','Muhammad','Myles','Myron',
    'Nash','Nasir','Nathan','Nathanael','Nathanial','Nathaniel','Neal','Neil','Nelson','Nestor','Nicholas','Nick','Nicklaus','Nickolas','Nico','Nicolas','Nigel','Nikhil','Niko','Nikolas','Noah','Noe','Noel','Nolan','Norman',
    'Octavio','Oliver','Omar','Omari','Orion','Orlando','Oscar','Osvaldo','Owen',
    'Pablo','Paris','Parker','Patrick','Paul','Paxton','Payton','Pedro','Perry','Peter','Peyton','Philip','Phillip','Phoenix','Pierce','Pierre','Preston',
    'Quentin','Quincy','Quinn','Quinten','Quintin','Quinton',
    'Raekwon','Rafael','Raheem','Ralph','Ramiro','Ramon','Ramsey','Randall','Randy','Raphael','Rashad','Rashawn','Rasheed','Raul','Raven','Ray','Raymond','Raymundo','Reagan','Reece','Reed','Reese','Reginald','Reid','Reilly','Remington','Rene','Reuben','Rex','Reynaldo','Rhett','Ricardo','Richard','Rick','Rickey','Ricky','Rico','Rigoberto','Riley','River','Robert','Roberto','Robin','Rocky','Roderick','Rodney','Rodolfo','Rodrigo','Rogelio','Roger','Rohan','Roland','Rolando','Roman','Romeo','Ronald','Ronaldo','Ronnie','Rory','Ross','Roy','Royce','Ruben','Rudy','Russell','Ryan','Ryder','Rylan','Ryley',
    'Sage','Salvador','Salvatore','Sam','Samir','Sammy','Samson','Samuel','Santiago','Santos','Saul','Sawyer','Scott','Seamus','Sean','Sebastian','Sergio','Seth','Shamar','Shane','Shannon','Shaquan','Shaun','Shawn','Shayne','Shea','Shelby','Sheldon','Sidney','Silas','Simeon','Simon','Skylar','Skyler','Solomon','Sonny','Spencer','Stanley','Stefan','Stephan','Stephen','Stephon','Sterling','Steve','Steven','Stone','Storm','Stuart','Syed',
    'Talon','Tanner','Tarik','Tariq','Tate','Tayler','Taylor','Terence','Terrance','Terrell','Terrence','Terry','Tevin','Thaddeus','Theodore','Thomas','Timothy','Titus','Tobias','Toby','Todd','Tomas','Tommy','Tony','Trace','Tracy','Trae','Travis','Travon','Tre','Trent','Trenton','Trever','Trevon','Trevor','Trey','Treyvon','Tristan','Tristen','Tristian','Tristin','Triston','Troy','Trystan','Tucker','Turner','Ty','Tyler','Tylor','Tyquan','Tyree','Tyrell','Tyron','Tyrone','Tyshawn','Tyson',
    'Ulises','Ulysses','Uriah','Uriel',
    'Valentin','Vance','Vaughn','Vernon','Vicente','Victor','Vincent',
    'Wade','Walker','Walter','Warren','Waylon','Wayne','Wesley','Weston','Will','William','Willie','Wilson','Winston','Wyatt',
    'Xavier',
    'Zachariah','Zachary','Zachery','Zackary','Zackery','Zakary','Zane','Zechariah'
  ],
  femaleNames: [
    'Aaliyah','Abbey','Abbie','Abbigail','Abby','Abigail','Addison','Adrian','Adriana','Adrianna','Adrienne','Aileen','Aimee','Aisha','Aja','Alaina','Alana','Alanna','Alayna','Aleah','Alecia','Alejandra','Alena','Alessandra','Alex','Alexa','Alexandra','Alexandrea','Alexandria','Alexia','Alexis','Alexus','Ali','Alia','Alice','Alicia','Alina','Alisa','Alisha','Alison','Alissa','Alivia','Aliyah','Alize','Allie','Allison','Allyson','Allyssa','Alma','Alondra','Alycia','Alysa','Alysha','Alysia','Alyson','Alyssa','Alyssia','Amanda','Amani','Amari','Amber','Amelia','Amy','Ana','Anahi','Anastasia','Andrea','Angel','Angela','Angelica','Angelina','Angelique','Angie','Anika','Anissa','Anita','Ann','Anna','Annabelle','Annalise','Annamarie','Anne','Annette','Annie','Annika','Annmarie','Ansley','Antoinette','Antonia','April','Araceli','Ariana','Arianna','Ariel','Arielle','Arlene','Armani','Asha','Ashanti','Ashlee','Ashleigh','Ashley','Ashlie','Ashly','Ashlyn','Ashlynn','Ashton','Asia','Aspen','Athena','Aubree','Aubrey','Audra','Audrey','Aurora','Autumn','Ava','Avery','Ayana','Ayanna','Ayla','Aylin',
    'Baby','Bailee','Bailey','Barbara','Baylee','Baylie','Beatriz','Berenice','Beth','Bethany','Beverly','Bianca','Billie','Blair','Blake','Blanca','Bobbi','Bobbie','Bonnie','Brandi','Brandy','Breana','Breann','Breanna','Breanne','Brenda','Brenna','Breonna','Bria','Briana','Brianna','Brianne','Bridget','Bridgette','Brielle','Brionna','Britney','Brittani','Brittany','Brittney','Brook','Brooke','Brooklyn','Brooklynn','Bryana','Bryanna',
    'Caitlin','Caitlyn','Caitlynn','Cali','Callie','Cameron','Camila','Camille','Camryn','Candace','Candice','Cara','Carina','Carissa','Carla','Carlee','Carley','Carli','Carlie','Carly','Carmen','Carol','Carolina','Caroline','Carolyn','Carrie','Carson','Casandra','Casey','Cassandra','Cassidy','Cassie','Catalina','Catherine','Cayla','Cecelia','Cecilia','Celeste','Celia','Celina','Celine','Chana','Chandler','Chanel','Chantal','Chantel','Charity','Charlene','Charlotte','Chase','Chasity','Chaya','Chelsea','Chelsey','Chelsie','Cheryl','Cheyanne','Cheyenne','China','Chloe','Christa','Christen','Christian','Christiana','Christie','Christina','Christine','Christy','Chyna','Ciara','Ciarra','Ciera','Cierra','Cindy','Claire','Clara','Clare','Clarissa','Claudia','Colleen','Connie','Constance','Cora','Corina','Corinne','Cortney','Courtney','Cristal','Cristina','Crystal','Cydney','Cynthia',
    'Daija','Daisha','Daisy','Dakota','Dalia','Dallas','Damaris','Dana','Daniela','Daniella','Danielle','Daphne','Darby','Daria','Darian','Darlene','Dasia','Dawn','Dayana','Dayna','Deanna','Deborah','Debra','Deja','Delaney','Delia','Delilah','Demi','Denise','Desirae','Desiree','Destany','Destinee','Destiney','Destini','Destiny','Devan','Devin','Devon','Devyn','Diamond','Diana','Diane','Dianna','Dina','Dominique','Domonique','Donna','Dorothy','Drew','Dulce',
    'Ebony','Eden','Edith','Eileen','Elaina','Elaine','Eleanor','Elena','Eliana','Elisa','Elisabeth','Elise','Elisha','Elissa','Eliza','Elizabeth','Ella','Ellen','Ellie','Elsa','Elyse','Elyssa','Emely','Emerald','Emilee','Emilia','Emilie','Emily','Emma','Erica','Ericka','Erika','Erin','Erykah','Eryn','Esmeralda','Esperanza','Essence','Estefania','Esther','Estrella','Eva','Evelyn',
    'Fabiola','Faith','Fatima','Felicia','Fiona','Frances','Francesca',
    'Gabriel','Gabriela','Gabriella','Gabrielle','Genesis','Genevieve','Georgia','Gianna','Gillian','Gina','Giovanna','Giselle','Gisselle','Gladys','Gloria','Grace','Gracie','Graciela','Gretchen','Guadalupe','Gwendolyn',
    'Hailee','Hailey','Haleigh','Haley','Hali','Halie','Halle','Hallie','Hana','Hanna','Hannah','Harley','Harmony','Haylee','Hayley','Haylie','Heather','Heaven','Heidi','Helen','Helena','Hillary','Hollie','Holly','Hope','Hunter',
    'Iliana','Imani','India','Ingrid','Irene','Iris','Isabel','Isabella','Isabelle','Isis','Itzel','Ivana','Ivy',
    'Jacey','Jacklyn','Jaclyn','Jacqueline','Jacquelyn','Jada','Jade','Jaden','Jailene','Jaime','Jami','Jamie','Jana','Janae','Janay','Jane','Janelle','Janessa','Janet','Janette','Janice','Janie','Jaqueline','Jasmin','Jasmine','Jasmyn','Jayda','Jayla','Jayme','Jazlyn','Jazmin','Jazmine','Jazmyn','Jazmyne','Jeanette','Jena','Jenifer','Jenna','Jennie','Jennifer','Jenny','Jesse','Jessica','Jessie','Jessika','Jewel','Jill','Jillian','Joanna','Joanne','Jocelyn','Jocelyne','Jodi','Joelle','Johanna','Jordan','Jordyn','Joselyn','Josephine','Josie','Joy','Joyce','Juana','Juanita','Judith','Judy','Julia','Juliana','Julianna','Julianne','Julie','Juliet','Juliette','Julisa','Julissa','Justice','Justina','Justine',
    'Kacey','Kaci','Kacie','Kaela','Kaelyn','Kaila','Kailee','Kailey','Kailyn','Kaitlin','Kaitlyn','Kaitlynn','Kala','Kaleigh','Kaley','Kali','Kalie','Kallie','Kalyn','Kara','Karen','Kari','Karina','Karissa','Karla','Karlee','Karley','Karli','Karlie','Karly','Kasandra','Kasey','Kassandra','Kassidy','Katarina','Kate','Katelin','Katelyn','Katelynn','Katerina','Katharine','Katherine','Kathleen','Kathryn','Kathy','Katie','Katlin','Katlyn','Katlynn','Katrina','Katy','Kaycee','Kayla','Kaylah','Kaylan','Kaylee','Kayleigh','Kayley','Kayli','Kaylie','Kaylin','Kaylyn','Kaylynn','Keeley','Keely','Keisha','Kelley','Kelli','Kellie','Kelly','Kelsea','Kelsey','Kelsi','Kelsie','Kendal','Kendall','Kendra','Kenia','Kennedy','Kenya','Kenzie','Keri','Kerri','Kerry','Khadijah','Kiana','Kianna','Kiara','Kiera','Kierra','Kiersten','Kiley','Kimberly','Kira','Kirsten','Kirstin','Kori','Kortney','Kourtney','Krista','Kristen','Kristi','Kristian','Kristin','Kristina','Kristine','Kristy','Krysta','Krystal','Kyla','Kylee','Kyleigh','Kylie','Kyra',
    'Lacey','Lacie','Lacy','Lara','Larissa','Laura','Laurel','Lauren','Lauryn','Lea','Leah','Leandra','Leann','Leanna','Leanne','Leila','Leilani','Lena','Lesley','Leslie','Lesly','Leticia','Lexi','Lexie','Lexis','Lexus','Lia','Liana','Lilian','Liliana','Lillian','Lilly','Lily','Linda','Lindsay','Lindsey','Lisa','Lisette','Lizbeth','Lizette','Logan','Loren','Lorena','Lori','Lourdes','Lucero','Lucia','Lucy','Luz','Lydia','Lyndsey','Lyric',
    'Macey','Macie','Mackenzie','Macy','Madalyn','Maddison','Madeleine','Madeline','Madelyn','Madelynn','Madisen','Madison','Madisyn','Madyson','Maegan','Maeve','Magdalena','Maggie','Maia','Makala','Makayla','Makenna','Makenzie','Malia','Mallory','Mandy','Mara','Maranda','Marcella','Margaret','Margarita','Maria','Mariah','Mariam','Mariana','Marianna','Maribel','Maricela','Marie','Mariela','Marilyn','Marina','Marisa','Marisela','Marisol','Marissa','Maritza','Marlena','Marlene','Marley','Martha','Martina','Mary','Mattie','Maura','Maureen','Maya','Mayra','Mckayla','Mckenna','Mckenzie','Meagan','Meaghan','Megan','Meghan','Melanie','Melina','Melinda','Melisa','Melissa','Melody','Mercedes','Meredith','Mia','Micaela','Micah','Micayla','Michaela','Michele','Michelle','Mikaela','Mikala','Mikayla','Mindy','Miracle','Miranda','Mireya','Miriam','Misty','Moesha','Mollie','Molly','Monica','Monika','Monique','Montana','Morgan','Moriah','Mya','Myra','Myranda',
    'Nadia','Nadine','Nancy','Naomi','Natalia','Natalie','Nataly','Natasha','Nathalie','Nautica','Nayeli','Nia','Nichole','Nicole','Nicolette','Nikita','Nikki','Nina','Noel','Noelle','Noemi','Nora','Norma',
    'Octavia','Odalis','Odalys','Olivia',
    'Paige','Paloma','Pamela','Paola','Paris','Patience','Patricia','Paula','Paulina','Pauline','Payton','Perla','Peyton','Phoebe','Precious','Princess','Priscilla',
    'Quinn',
    'Rachael','Racheal','Rachel','Rachelle','Raegan','Randi','Raquel','Raven','Reagan','Rebeca','Rebecca','Rebekah','Regan','Regina','Reilly','Reina','Renee','Reyna','Rhiannon','Riley','Rita','Robin','Robyn','Rochelle','Rocio','Rosa','Rose','Rosemary','Roxanne','Ruby','Ruth','Ryan','Ryann','Rylee','Rylie',
    'Sabrina','Sade','Sadie','Sage','Sally','Salma','Samantha','Samara','Sandra','Sandy','Sara','Sarah','Sarai','Sarina','Sasha','Savana','Savanah','Savanna','Savannah','Scarlett','Selena','Selina','Serena','Serenity','Shaina','Shakira','Shana','Shania','Shanice','Shanna','Shannon','Shantel','Sharon','Shauna','Shawna','Shayla','Shaylee','Shayna','Shea','Sheila','Shelbi','Shelbie','Shelby','Sheridan','Shianne','Shirley','Shyann','Shyanne','Sidney','Sienna','Sierra','Silvia','Simone','Skye','Skylar','Skyler','Sofia','Sonia','Sonya','Sophia','Sophie','Stacey','Stacy','Star','Starr','Stefanie','Stephanie','Stephany','Stevie','Stormy','Summer','Susan','Susana','Susanna','Suzanne','Sydnee','Sydney','Sydni','Sydnie','Sylvia',
    'Tabatha','Tabitha','Talia','Tamara','Tamera','Tamia','Tammy','Tania','Tanisha','Tanya','Tara','Taryn','Tasha','Tatiana','Tatianna','Tatum','Tatyana','Taya','Tayler','Taylor','Tea','Teresa','Terri','Tess','Tessa','Thalia','Theresa','Tia','Tiana','Tianna','Tiara','Tierra','Tiffani','Tiffany','Tina','Toni','Tonya','Tori','Tracy','Trinity','Trisha','Tristan','Tristen','Tyler','Tyra',
    'Unique',
    'Valentina','Valeria','Valerie','Vanesa','Vanessa','Veronica','Victoria','Virginia','Vivian','Viviana',
    'Wendy','Whitney',
    'Xena',
    'Yadira','Yasmeen','Yasmin','Yasmine','Yazmin','Yesenia','Yessenia','Yolanda','Yulisa','Yulissa','Yvette','Yvonne',
    'Zaria','Zoe','Zoey'
  ],
  lastNames: [
    'Abbott','Acevedo','Acosta','Adams','Adkins','Aguilar','Aguirre','Albert','Alexander','Alford','Allen','Allison','Alston','Alvarado','Alvarez','Anderson','Andrews','Anthony','Armstrong','Arnold','Ashley','Atkins','Atkinson','Austin','Avery','Avila','Ayala','Ayers',
    'Bailey','Baird','Baker','Baldwin','Ball','Ballard','Banks','Barber','Barker','Barlow','Barnes','Barnett','Barr','Barrera','Barrett','Barron','Barry','Bartlett','Barton','Bass','Bates','Battle','Bauer','Baxter','Beach','Bean','Beard','Beasley','Beck','Becker','Bell','Bender','Benjamin','Bennett','Benson','Bentley','Benton','Berg','Berger','Bernard','Berry','Best','Bird','Bishop','Black','Blackburn','Blackwell','Blair','Blake','Blanchard','Blankenship','Blevins','Bolton','Bond','Bonner','Booker','Boone','Booth','Bowen','Bowers','Bowman','Boyd','Boyer','Boyle','Bradford','Bradley','Bradshaw','Brady','Branch','Bray','Brennan','Brewer','Bridges','Briggs','Bright','Britt','Brock','Brooks','Brown','Browning','Bruce','Bryan','Bryant','Buchanan','Buck','Buckley','Buckner','Bullock','Burch','Burgess','Burke','Burks','Burnett','Burns','Burris','Burt','Burton','Bush','Butler','Byers','Byrd',
    'Cabrera','Cain','Calderon','Caldwell','Calhoun','Callahan','Camacho','Cameron','Campbell','Campos','Cannon','Cantrell','Cantu','Cardenas','Carey','Carlson','Carney','Carpenter','Carr','Carrillo','Carroll','Carson','Carter','Carver','Case','Casey','Cash','Castaneda','Castillo','Castro','Cervantes','Chambers','Chan','Chandler','Chaney','Chang','Chapman','Charles','Chase','Chavez','Chen','Cherry','Christensen','Christian','Church','Clark','Clarke','Clay','Clayton','Clements','Clemons','Cleveland','Cline','Cobb','Cochran','Coffey','Cohen','Cole','Coleman','Collier','Collins','Colon','Combs','Compton','Conley','Conner','Conrad','Contreras','Conway','Cook','Cooke','Cooley','Cooper','Copeland','Cortez','Cote','Cotton','Cox','Craft','Craig','Crane','Crawford','Crosby','Cross','Cruz','Cummings','Cunningham','Curry','Curtis',
    'Dale','Dalton','Daniel','Daniels','Daugherty','Davenport','David','Davidson','Davis','Dawson','Day','Dean','Decker','Dejesus','Delacruz','Delaney','Deleon','Delgado','Dennis','Diaz','Dickerson','Dickson','Dillard','Dillon','Dixon','Dodson','Dominguez','Donaldson','Donovan','Dorsey','Dotson','Douglas','Downs','Doyle','Drake','Dudley','Duffy','Duke','Duncan','Dunlap','Dunn','Duran','Durham','Dyer',
    'Eaton','Edwards','Elliott','Ellis','Ellison','Emerson','England','English','Erickson','Espinoza','Estes','Estrada','Evans','Everett','Ewing',
    'Farley','Farmer','Farrell','Faulkner','Ferguson','Fernandez','Ferrell','Fields','Figueroa','Finch','Finley','Fischer','Fisher','Fitzgerald','Fitzpatrick','Fleming','Fletcher','Flores','Flowers','Floyd','Flynn','Foley','Forbes','Ford','Foreman','Foster','Fowler','Fox','Francis','Franco','Frank','Franklin','Franks','Frazier','Frederick','Freeman','French','Frost','Fry','Frye','Fuentes','Fuller','Fulton',
    'Gaines','Gallagher','Gallegos','Galloway','Gamble','Garcia','Gardner','Garner','Garrett','Garrison','Garza','Gates','Gay','Gentry','George','Gibbs','Gibson','Gilbert','Giles','Gill','Gillespie','Gilliam','Gilmore','Glass','Glenn','Glover','Goff','Golden','Gomez','Gonzales','Gonzalez','Good','Goodman','Goodwin','Gordon','Gould','Graham','Grant','Graves','Gray','Green','Greene','Greer','Gregory','Griffin','Griffith','Grimes','Gross','Guerra','Guerrero','Guthrie','Gutierrez','Guy','Guzman',
    'Hahn','Hale','Haley','Hall','Hamilton','Hammond','Hampton','Hancock','Haney','Hansen','Hanson','Hardin','Harding','Hardy','Harmon','Harper','Harrell','Harrington','Harris','Harrison','Hart','Hartman','Harvey','Hatfield','Hawkins','Hayden','Hayes','Haynes','Hays','Head','Heath','Hebert','Henderson','Hendricks','Hendrix','Henry','Hensley','Henson','Herman','Hernandez','Herrera','Herring','Hess','Hester','Hewitt','Hickman','Hicks','Higgins','Hill','Hines','Hinton','Hobbs','Hodge','Hodges','Hoffman','Hogan','Holcomb','Holden','Holder','Holland','Holloway','Holman','Holmes','Holt','Hood','Hooper','Hoover','Hopkins','Hopper','Horn','Horne','Horton','House','Houston','Howard','Howe','Howell','Hubbard','Huber','Hudson','Huff','Huffman','Hughes','Hull','Humphrey','Hunt','Hunter','Hurley','Hurst','Hutchinson','Hyde',
    'Ingram','Irwin',
    'Jackson','Jacobs','Jacobson','James','Jarvis','Jefferson','Jenkins','Jennings','Jensen','Jimenez','Johns','Johnson','Johnston','Jones','Jordan','Joseph','Joyce','Joyner','Juarez','Justice',
    'Kane','Kaufman','Keith','Keller','Kelley','Kelly','Kemp','Kennedy','Kent','Kerr','Key','Kidd','Kim','King','Kinney','Kirby','Kirk','Kirkland','Klein','Kline','Knapp','Knight','Knowles','Knox','Koch','Kramer',
    'Lamb','Lambert','Lancaster','Landry','Lane','Lang','Langley','Lara','Larsen','Larson','Lawrence','Lawson','Le','Leach','Leblanc','Lee','Leon','Leonard','Lester','Levine','Levy','Lewis','Lindsay','Lindsey','Little','Livingston','Lloyd','Logan','Long','Lopez','Lott','Love','Lowe','Lowery','Lucas','Luna','Lynch','Lynn','Lyons',
    'MacDonald','Macias','Mack','Madden','Maddox','Maldonado','Malone','Mann','Manning','Marks','Marquez','Marsh','Marshall','Martin','Martinez','Mason','Massey','Mathews','Mathis','Matthews','Maxwell','May','Mayer','Maynard','Mayo','Mays','McBride','McCall','McCarthy','McCarty','McClain','McClure','McConnell','McCormick','McCoy','McCray','McCullough','McDaniel','McDonald','McDowell','McFadden','McFarland','McGee','McGowan','McGuire','McIntosh','McIntyre','McKay','McKee','McKenzie','McKinney','McKnight','McLaughlin','McLean','McLeod','McMahon','McMillan','McNeil','McPherson','Meadows','Medina','Mejia','Melendez','Melton','Mendez','Mendoza','Mercado','Mercer','Merrill','Merritt','Meyer','Meyers','Michael','Middleton','Miles','Miller','Mills','Miranda','Mitchell','Molina','Monroe','Montgomery','Montoya','Moody','Moon','Mooney','Moore','Morales','Moran','Moreno','Morgan','Morin','Morris','Morrison','Morrow','Morse','Morton','Moses','Mosley','Moss','Mueller','Mullen','Mullins','Munoz','Murphy','Murray','Myers',
    'Nash','Navarro','Neal','Nelson','Newman','Newton','Nguyen','Nichols','Nicholson','Nielsen','Nieves','Nixon','Noble','Noel','Nolan','Norman','Norris','Norton','Nunez',
    'OBrien','Ochoa','OConnor','Odom','ODonnell','Oliver','Olsen','Olson','ONeal','ONeil','ONeill','Orr','Ortega','Ortiz','Osborn','Osborne','Owen','Owens',
    'Pace','Pacheco','Padilla','Page','Palmer','Park','Parker','Parks','Parrish','Parsons','Pate','Patel','Patrick','Patterson','Patton','Paul','Payne','Pearson','Peck','Pena','Pennington','Perez','Perkins','Perry','Peters','Petersen','Peterson','Petty','Phelps','Phillips','Pickett','Pierce','Pittman','Pitts','Pollard','Poole','Pope','Porter','Potter','Potts','Powell','Powers','Pratt','Preston','Price','Prince','Pruitt','Puckett','Pugh',
    'Quinn',
    'Ramirez','Ramos','Ramsey','Randall','Randolph','Rasmussen','Ratliff','Ray','Raymond','Reed','Reese','Reeves','Reid','Reilly','Reyes','Reynolds','Rhodes','Rice','Rich','Richard','Richards','Richardson','Richmond','Riddle','Riggs','Riley','Rios','Rivas','Rivera','Rivers','Roach','Robbins','Roberson','Roberts','Robertson','Robinson','Robles','Rocha','Rodgers','Rodriguez','Rodriquez','Rogers','Rojas','Rollins','Roman','Romero','Rosa','Rosales','Rosario','Rose','Ross','Roth','Rowe','Rowland','Roy','Ruiz','Rush','Russell','Russo','Rutledge','Ryan',
    'Salas','Salazar','Salinas','Sampson','Sanchez','Sanders','Sandoval','Sanford','Santana','Santiago','Santos','Sargent','Saunders','Savage','Sawyer','Schmidt','Schneider','Schroeder','Schultz','Schwartz','Scott','Sears','Sellers','Serrano','Sexton','Shaffer','Shannon','Sharp','Sharpe','Shaw','Shelton','Shepard','Shepherd','Sheppard','Sherman','Shields','Short','Silva','Simmons','Simon','Simpson','Sims','Singleton','Skinner','Slater','Sloan','Small','Smith','Snider','Snow','Snyder','Solis','Solomon','Sosa','Soto','Sparks','Spears','Spence','Spencer','Stafford','Stanley','Stanton','Stark','Steele','Stein','Stephens','Stephenson','Stevens','Stevenson','Stewart','Stokes','Stone','Stout','Strickland','Strong','Stuart','Suarez','Sullivan','Summers','Sutton','Swanson','Sweeney','Sweet','Sykes',
    'Talley','Tanner','Tate','Taylor','Terrell','Terry','Thomas','Thompson','Thornton','Tillman','Todd','Torres','Townsend','Tran','Travis','Trevino','Trujillo','Tucker','Turner','Tyler','Tyson',
    'Underwood',
    'Valdez','Valencia','Valentine','Valenzuela','Vance','Vang','Vargas','Vasquez','Vaughan','Vaughn','Vazquez','Vega','Velasquez','Velazquez','Velez','Villarreal','Vincent','Vinson',
    'Wade','Wagner','Walker','Wall','Wallace','Waller','Walls','Walsh','Walter','Walters','Walton','Ward','Ware','Warner','Warren','Washington','Waters','Watkins','Watson','Watts','Weaver','Webb','Weber','Webster','Weeks','Weiss','Welch','Wells','West','Wheeler','Whitaker','White','Whitehead','Whitfield','Whitley','Whitney','Wiggins','Wilcox','Wilder','Wiley','Wilkerson','Wilkins','Wilkinson','William','Williams','Williamson','Willis','Wilson','Winters','Wise','Witt','Wolf','Wolfe','Wong','Wood','Woodard','Woods','Woodward','Wooten','Workman','Wright','Wyatt','Wynn',
    'Yang','Yates','York','Young',
    'Zamora','Zimmerman'
  ]
};
genGrunt.guns = {
    'P' : ['Pistol', '12', '1/2', '1'],
    'BAP' : ['Bad Ass Pistol', '12', '1/2', '2'],
    'MP' : ['Machine Pistol', '12', '3', '1'],
    'SG' : ['Shotgun', '12', '3', '2'],
    'SMG' : ['Submachine Gun', '24', '3', '1'],
    'BAR' : ['Bolt Action Rifle', '48', '1', '3'],
    'SAR' : ['Semi Automatic Rifle', '48', '1/2', '3'],
    'AR' : ['Assault Rifle', '48', '1/3', '3'],
    'SAW' : ['Squad Automatic Weapon', '48', '3/4', '3'],
    'NONE' :['None', '', '', '']
};
genGrunt.generate = (function() {
    'use strict';
    var commands = {
            gengrunt: function(args, msg) {
                var gruntType = args[0] || 0;
                if (gruntType == 'Citizen' || gruntType == 'Ganger' || gruntType == 'Survivor') {
                    makeGrunt(msg.playerid, msg.who, args[0]);
                } else {
                    sendChat(`genGrunt v${genGrunt.scriptVersion}`, gruntType+' is not a valid gruntType');
                }
            },
            help: function(command, args, msg) {
                if (_.isFunction(commands[`help_${command}`])) {
                    commands[`help_${command}`](args, msg);
                }
            },
            help_gengrunt: function(args, msg) {
              sendChat(`genGrunt v${genGrunt.scriptVersion}`, 'Specify !genGrunt followed by the type to generate (Citizen, Ganger, or Survivor).');
            }
        };

    function makeGrunt(playerID, playerName, gruntType) {
        var myGender = getGender(gruntType);
        var myName = getName(myGender);
        var myStats = getReputation(gruntType);
        var myAttribute = getAttribute();
        var myGuns = getGuns(gruntType);
        var template = {
          "charactername": "New " + gruntType,
          "gmnotes": "Generated By: genGrunt " + genGrunt.scriptVersion,
          "viewableBy": playerID,
          "controlledBy": playerID
        }
        template.channelalert = playerName + " created a new " + myGender + " " + gruntType + " character named " + myName;
        //Creates the Character Object
        var character = createObj("character", {
            name:             myName,
            inplayerjournals: template.viewableBy,
            controlledby:     template.controlledBy,
            archived:         false
        });
        //Set script version
        createObj("attribute", {
            name:         "sheetGenerator",
            current:      `genGrunt v${genGrunt.scriptVersion}`,
            _characterid: character.id
        });
        //Set character name
        createObj("attribute", {
            name:         "charName",
            current:      myName,
            _characterid: character.id
        });
        //Set character type A
        createObj("attribute", {
            name:         "charTypeA",
            current:      "Grunt",
            _characterid: character.id
        });
        //Set character type B
        createObj("attribute", {
            name:         "charTypeB",
            current:      gruntType,
            _characterid: character.id
        });
        //Set character gender
        createObj("attribute", {
            name:         "charGender",
            current:      myGender,
            _characterid: character.id
        });
        //Set character age
        createObj("attribute", {
            name:         "charAge",
            current:      getAge(gruntType),
            _characterid: character.id
        });
        //Set character handedness
        createObj("attribute", {
            name:         "charHanded",
            current:      getHanded(),
            _characterid: character.id
        });
        //Set character reputation
        createObj("attribute", {
            name:         "charReputation",
            current:      myStats[0],
            _characterid: character.id
        });
        //Set character people
        createObj("attribute", {
            name:         "charPeople",
            current:      myStats[1],
            _characterid: character.id
        });
        //Set character savvy
        createObj("attribute", {
            name:         "charSavvy",
            current:      myStats[2],
            _characterid: character.id
        });
        //Set character fitness
        createObj("attribute", {
            name:         "charFitness",
            current:      myStats[3],
            _characterid: character.id
        });
        //Set character drive
        createObj("attribute", {
            name:         "charDrive",
            current:      myStats[4],
            _characterid: character.id
        });
        //Set character fight
        createObj("attribute", {
            name:         "charFight",
            current:      myStats[5],
            _characterid: character.id
        });
        //Set character shoot
        createObj("attribute", {
            name:         "charShoot",
            current:      myStats[6],
            _characterid: character.id
        });
        //Set character attribute
        createObj("attribute", {
            name:         "charAttr1",
            current:      myAttribute[0],
            _characterid: character.id
        });
        createObj("attribute", {
            name:         "charAttr1Text",
            current:      myAttribute[1],
            _characterid: character.id
        });
        //Set character gun
        createObj("attribute", {
            name:         "gun1Name",
            current:      myGuns[0],
            _characterid: character.id
        });
        createObj("attribute", {
            name:         "gun1Range",
            current:      myGuns[1],
            _characterid: character.id
        });
        createObj("attribute", {
            name:         "gun1Target",
            current:      myGuns[2],
            _characterid: character.id
        });
        createObj("attribute", {
            name:         "gun1Impact",
            current:      myGuns[3],
            _characterid: character.id
        });

        sendChat('', "/desc " + template.channelalert);
    }

    function getSomething(gruntType) {
        var chance = randomInteger(100),
            mySomething;
        switch(gruntType){
            case "Citizen":
                break;
            case "Ganger":
                break;
            case "Survivor":
                break;
        }
        return mySomething;
    }

    function getGender(gruntType) {
        var chance = randomInteger(100),
            myGender;
        switch(gruntType){
            case "Citizen":
                if (chance < 51) { myGender = "Female"; } else { myGender = "Male"; }
                break;
            case "Ganger":
                if (chance < 34) { myGender = "Female"; } else { myGender = "Male"; }
                break;
            case "Survivor":
                if (chance < 26) { myGender = "Female"; } else { myGender = "Male"; }
                break;
        }
        return myGender;
    }
    
    function getName(myGender) {
        var myName;
        switch(myGender){
            case "Male":
                myName=genGrunt.randomNames.maleNames[randomInteger(1000)] + " " + genGrunt.randomNames.lastNames[randomInteger(1000)];
                break;
            case "Female":
                myName=genGrunt.randomNames.femaleNames[randomInteger(1000)] + " " + genGrunt.randomNames.lastNames[randomInteger(1000)];
                break;
        }
        return myName;
    }

    function getReputation(gruntType) {
        var chance = randomInteger(72),
            myStats = new Array(),
            myReputation, currentIndex, temporaryValue, randomIndex;
        switch(gruntType){
            case "Citizen":
                if (chance < 19) {
                    myReputation = 2;
                } else if (chance < 56) {
                    myReputation = 3;
                } else {
                    myReputation = 4;
                }
                break;
            case "Ganger":
                if (chance < 8) {
                    myReputation = 2;
                } else if (chance < 43) {
                    myReputation = 3;
                } else if (chance < 53) {
                    myReputation = 4;
                } else {
                    myReputation = 5;
                }
                break;
            case "Survivor":
                if (chance < 21) {
                    myReputation = 3;
                } else if (chance < 57) {
                    myReputation = 4;
                } else {
                    myReputation = 5;
                }
                break;
        }
        myStats = [myReputation, myReputation, myReputation, myReputation, myReputation-1, myReputation-1, myReputation-2];
        currentIndex = myStats.length;
        //Shuffle the stats, leaving the first element alone.
        while (1 !== currentIndex) {
            //Get a random element
            randomIndex = randomInteger(currentIndex-1);
            currentIndex -= 1;
            //Swap it with the current element
            temporaryValue = myStats[currentIndex];
            myStats[currentIndex] = myStats[randomIndex];
            myStats[randomIndex] = temporaryValue;
        }
        return myStats;
    }
    
    function getAttribute() {
        var attrNum = randomInteger(6)+randomInteger(6)+randomInteger(6),
            myAttribute = new Array(),
            attrName, attrDesc;
        switch(attrNum){
            case 3:
                attrName="Born Leader";
                attrDesc="Counts a +1d6 when taking the Keeping It Together Test if they are the Leader";
                break;
            case 4:
                attrName="Medic L";
                if (randomInteger(6)==6) { attrName=attrName + "2"; } else { attrName=attrName + "1"; }
                attrDesc="When a character rolls the After the Battle Recovery Test if a Medic is present the Medic rolls 1d6 for each level of Medic Attribute he possesses. Each Medic Die works like a Leader Die, is compared to the Rep of the Medic, and is applied to the character taking the test. Medic Dice can be combined with Medical Supplies.";
                break;
            case 5:
                attrName="Attractive";
                attrDesc="Counts a +1 when taking a People Challenge against the opposite sex.";
                break;
            case 6:
                attrName="Brawler";
                attrDesc=" Counts a +1d6 when in melee";
                break;
            case 7:
                attrName="Fast";
                attrDesc="Normal move is now 10in. and allowed to use 3d6 when taking the Fast Move Test counting all three results.";
                break;
            case 8:
                attrName="Dim";
                attrDesc="Counts a -1 when taking a Savvy Challenge.";
                break;
            case 9:
                attrName="Rage";
                attrDesc="Counts a +1d6 when in melee. Counts a +1d6 when taking the Charge into Melee Test.";
                break;
            case 10:
                attrName="Greedy";
                attrDesc="Empty structures, corpses, or anything that offers possibility of loot will delay them for 1d6 turns. A Leader can cut this short by moving to within 1in.";
                break;
            case 11:
                attrName="Runt";
                attrDesc="Counts a -1d6 when taking the Charge into Melee Test.";
                break;
            case 12:
                attrName="Slow";
                attrDesc="Only rolls 1d6 when taking the Fast Move Test.";
                break;
            case 13:
                attrName="Poser";
                attrDesc="Will roll only 1d6 when taking the Received Fire and Man Down Tests.";
                break;
            case 14:
                attrName="Free Spirit";
                attrDesc="Counts a +1 when taking a People Challenge but counts a -1 when taking a Savvy Challenge.";
                break;
            case 15:
                attrName="Logical";
                attrDesc="Counts a +1 when taking a science or mechanical related Savvy Challenge.";
                break;
            case 16:
                attrName="Agile";
                attrDesc="Counts a +1 when taking any Physical Challenge involving agility.";
                break;
            case 17:
                attrName="Initiative";
                attrDesc="Counts one Rep higher for Activation purposes when operating alone.";
                break;
            case 18:
                attrName="Hard as Nails";
                attrDesc="Once during each Encounter the character treat its first human inflicted Obviously Dead result as a Knock Down result instead.";
                break;
        }
        myAttribute[0] = attrName;
        myAttribute[1] = attrDesc;
        return myAttribute;
    }

    function getGuns(gruntType) {
        var chance = randomInteger(72),
            myGuns;
        switch(gruntType){
            case "Citizen":
                if (chance < 7) {
                    myGuns = genGrunt.guns.BAP
                } else if (chance < 21) {
                    myGuns = genGrunt.guns.SG
                } else if (chance < 37) {
                    myGuns = genGrunt.guns.NONE
                } else if (chance < 54) {
                    myGuns = genGrunt.guns.P
                } else {
                    myGuns = genGrunt.guns.BAR
                }
                break;
            case "Ganger":
                if (chance < 6) {
                    myGuns = genGrunt.guns.P
                } else if (chance < 11) {
                    myGuns = genGrunt.guns.AR
                } else if (chance < 20) {
                    myGuns = genGrunt.guns.NONE
                } else if (chance < 31) {
                    myGuns = genGrunt.guns.BAP
                } else if (chance < 51) {
                    myGuns = genGrunt.guns.MP
                } else {
                    myGuns = genGrunt.guns.SG
                }
                break;
            case "Survivor":
                if (chance < 3) {
                    myGuns = genGrunt.guns.NONE
                } else if (chance < 7) {
                    myGuns = genGrunt.guns.P
                } else if (chance < 11) {
                    myGuns = genGrunt.guns.MP
                } else if (chance < 19) {
                    myGuns = genGrunt.guns.BAP
                } else if (chance < 29) {
                    myGuns = genGrunt.guns.SMG
                } else if (chance < 51) {
                    myGuns = genGrunt.guns.SG
                } else {
                    myGuns = genGrunt.guns.AR
                }
                break;
        }
        return myGuns;
    }

    function getAge(gruntType) {
        var chance = randomInteger(72),
            myAge;
        switch(gruntType){
            case "Citizen":
                if (chance < 17) {
                    myAge = 13 + randomInteger(6);
                } else if (chance < 32) {
                    myAge = 19 + randomInteger(20);
                } else if (chance < 66) {
                    myAge = 39 + randomInteger(20);
                } else {
                    myAge = 59 + randomInteger(16);
                }
                break;
            case "Ganger":
                if (chance < 13) {
                    myAge = 13 + randomInteger(6);
                } else if (chance < 30) {
                    myAge = 19 + randomInteger(20);
                } else if (chance < 62) {
                    myAge = 39 + randomInteger(20);
                } else {
                    myAge = 59 + randomInteger(16);
                }
                break;
            case "Survivor":
                if (chance < 16) {
                    myAge = 13 + randomInteger(6);
                } else if (chance < 34) {
                    myAge = 19 + randomInteger(20);
                } else if (chance < 65) {
                    myAge = 39 + randomInteger(20);
                } else {
                    myAge = 59 + randomInteger(16);
                }
                break;
        }
        return myAge;
    }

    function getHanded() {
        var leftChance = randomInteger(10),
            ambiChance = randomInteger(100),
            myHanded = "Right Handed";
        if (leftChance == 1) { myHanded="Left Handed"; }
        if (ambiChance == 1) { myHanded="Ambidextrous"; }
        return myHanded;
    }

    function handleInput(msg) {
        var isApi = msg.type === 'api',
            args = msg.content.trim().splitArgs(),
            command, arg0, isHelp;
        if (isApi) {
            command = args.shift().substring(1).toLowerCase();
            arg0 = args.shift() || '';
            isHelp = arg0.toLowerCase() === 'help' || arg0.toLowerCase() === 'h' || command === 'help';
            if (!isHelp) {
                if (arg0 && arg0.length > 0) {
                    args.unshift(arg0);
                }
                if (_.isFunction(commands[command])) {
                    commands[command](args, msg);
                }
            } else if (_.isFunction(commands.help)) {
                commands.help(command === 'help' ? arg0 : command, args, msg);
            }
        } else if (_.isFunction(commands['msg_' + msg.type])) {
            commands['msg_' + msg.type](args, msg);
        }
    }
    
    function registerEventHandlers() {
        on('chat:message', handleInput);
    }
    return {
        registerEventHandlers: registerEventHandlers
    };
}());

on('ready', function() {
    'use strict';
    
    genGrunt.generate.registerEventHandlers();
});
