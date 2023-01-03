import React from 'react'
import {About, Footer, Header, Skills, Testimonial, Work} from './container/index'
import {Navbar} from './components'
import './App.scss'
const App = () => {
  console.log(

     "     ._       __          ____                              \n"+
     "    ';  `\--,-' /`)    _.-'    `-._                          \n"+
     "     \_/    ' | /`--,'            `-.     .--....____       \n"+
     "     /                              `._.'           `---... \n"+
     "    |-.   _      ;    meowww.            .-----..._______)  \n"+
     "   ,,\q/ (q_>'_...                      .-'                 \n"+
     "   ===/ ; _.-'~~-             /       ,'                    \n"+
     "   ````-'_,:  `..         ___(       |                      \n"+
     "            \         : /'/   \      \                      \n"+
     "             `.      //' (    :`    `\                      \n"+
     "             / \    :     `  /  `-.  /                      \n"+
 "            (  (;   ;     (__/  /  /                          \n"+
 "             \,_)\  ;          ,'  /                           \n"+
 "    .-.          |  |         `--                             \n"+
 "   (''_.)-._     (__,>                                          \n"+
 "                                                                \n"+
 "       Hey there 👋, curious!\n"+
 "       You're probably wondering how cool this site is.\n"+
 "                                                          \n"+
 "       If you think it's interesting and want to see the code behind it, \n"+
 "       I've placed it in the open at https://github.com/WEDNESDAYfate/ZAYA-portfolio \n"+
 "       Feel free to check it out!\n "+
 "                                  \n "+
 "      Also, you can contact me on https://www.instagram.com/wednesdayfate/ or zayadeveloper8@gmail.com ✨.\n"


  );

  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Footer/>


    </div>
  )
}

export default App