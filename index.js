$("#login-signup-user").hide()
$(".cont").hide()
$("#FAQ").hide()
$("#home").hide()
$("#why-us").hide()
$("#calendar").hide()
$("#HC").hide()

function showHome(){
   $("#Main").text("")
  var home = $("<div> <p>	WAR is an independent record label based in Tunisia, Tunis. Our aim is to support and promote emerging and established artists across the country; releasing music, organising tours and securing press coverage for the acts signed to the label. We are a small company that manufactures, sells, promotes and distributes recordings of associated music artists We developed the necessary contacts and experience to propel this new label and its artists to success. </p></div>")
$("#Main").append(home)
}
function showWhy() {
    $("#Main").text("") 
    var why= $("<div><p>This business plan will demonstrate how WAR Label will create strong brand recognition within both local and global music scene and generate profit long-term through royalties, ticket sales, merchandise both online and through direct selling points and other revenue streams.</p></div>")
    $("#Main").append(why)
}
function showFaq(){
    $("#Main").text("") 
    var faq= $("<div><ul> QUESTIONS: <li>Q. What is the rate for studio time?</li><li> A. $65.00 per hour + GST. This includes the audio engineer, producer, and facility.</li><li> Q. Is it possible to pay a flat rate per song?</li><li>A. Yes, but every project is different. After discussing your specific project we will be able to quote you a flat rate charge.</li><li>Q. Can you make me a custom beat or do I have to just pick a pre-made one?</li><li>A. We absolutely do custom work. Contact us today with your ideas for a custom beat or instrumental.</li><li>Q. Do you only record musicians with previous studio experience?</li><li>A. Anyone can come and record a song at Resonate Music. Established artists and those just starting out are all welcomed.</li><li>Q. I d like to learn how to record and produce music, do you teach that?</li><li>A. We have specially designed courses to help with both audio engineering and digital music production. Click here to learn more about our Recording and Digital Production classes.</li><li> Q. Is your studio sound treated?</li><li>A. All parts of our studio are constructed and treated for both sound proofing and acoustics.</li><li>Q. I m thinking of surprising a friend with some studio time. What would be the best way to do this?</li><li>A. What you want is a Resonate Studio Time Gift Card.  You can purchase any number of studio hours on a gift card and the gifted can book their sessions after receiving the card. Resonate Music gift cards never expire.</li></ul></div>") 
    $("#Main").append(faq)
}
function showCont(){ $("#Main").text("") 
var cont=$("<div><p>You can contact us on <a href =https://www.facebook.com/warmusictn>facebook</a>or on <a href=https://www.instagram.com/war_label>instagram</a></p><p> Book your session now<a href=https://docs.google.com/spreadsheets/d/1B9oRXyQUVCeSzFetZCamsM6jGSYhRTYfu2STm8T71D8/edit?usp=sharing>Studio weekly planning</a></p></div>")
    $("#Main").append(cont)}
function showLogin(){ $("#Main").text("") 
var login=$("<form> <div id=namebox><p> Enter your email here</p><input id = useremail type=email placeholder=your email onchange=myFunction()></div><div id =passwordbox><p> Enter your password here</p><input id = userpassword type=password placeholder=your password onchange=myFunction()></div><div id=sub><button onclick=check()>login</button></div> <div><button onclick='securityCheck()'>sign-up </button></div></form>")
        $("#Main").append(login)
    }

function showCalendar(){
  $("#Main").text('')
  var cal=$("<div id=calendar><h1>Book a session date</h1><input type=date id=day name=day onchange=getDate()><button  id=day_check onclick=checkDate()>Book</button></div>")
$("#Main").append(cal)
}
function showHelpcenter(){
  $("#Main").text()
  var helpme=$(" <div id=HC> <p>HELP CENTER </p><input id=help type=text placeholder=If you have any questions or suggestions, please leave us a message here onchange=myFunction()><button  onclick=sent()>send </button></div>")
  $("#Main").append(helpme)
}
   

  var usersData = [ 
    { user: {email: 'majd@rbk.org', password: '_majd(2017)'}}, 
    { user: {email: 'fatema@rbk.org', password: '12345'}}, 
    { user: {email: 'maher@rbk.org', password: 'M@her2017'}}, 
    { user: {email: 'sahar@rbk.org', password: 'saher2017'}} 
];       
    
 


function myFunction() {
   
    var password= document.getElementById("userpassword").value
    var email = document.getElementById("useremail").value
     
      console.log('email',email)
      console.log('password',password)
      
    }
   
    function check(){
        var password= $("#userpassword").value
        var email = $("#useremail").value
        for(i=0;i<usersData.length;i++) {
         
              if(usersData[i].user.email===email && usersData[i].user.password===password){
                console.log('you re being redirected')} else console.log('invalid password or email')
          }
          
      }   
      function getDate(){
var date = document.getElementById("day").value
console.log(date)
      }
      function checkDate(){
        var taken =[06/12/2022,07/12/2022,08/12/2022]
        var date = document.getElementById("day").value
        for(i=0;i<taken.length;i++){
          if(date===taken[i]){
            console.log("this "+date+" is already taken")
          } console.log("You booked a session for the" + date )
        }
      }


      function securityCheck(){
        var password= $("#userpassword").value
        var r = new RegExp('^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/')
    var x= new RegExp('^[a-z0-9]')
    console.log(r.test(password))
               if(r.test(password)===true) {console.log(password +"  is strong") 
"strong" }                                    
    else if (x.test(password)===true){
             
             console.log("Your password is normal")
             console.log("password should contain atleast one Maj and one special character")
         } 
                  else {
             
             console.log("Your password is weak")
                      console.log("password should contain atleast one Maj,one number and one special character")
              
               }
        }  
    
        var suggestion_box = [] 
        function sent(){
          
          var message =document.getElementById("help").value;
          suggestion_box.push(message);
          console.log('Your message was sent successfully. Thank you for your collaboration ')
        }
    
    