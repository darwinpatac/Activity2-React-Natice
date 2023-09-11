import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {Image} from 'react-native';
import LookAndFeel from './.expo/src/design';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faEnvelope, faBars, faCamera,faPencil,faMagnifyingGlass,faPen,faComment, faVideo,faUser, faBook } from '@fortawesome/free-solid-svg-icons';
//import{faBars,faEnvelope , faCamera,faPencil,faPen,faMessage, faVideoCamera, faBook} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical, faMagnifyingGlass,faFolderPlus, faPlayCircle,faPlay, faMusic, faPlaceOfWorship, faGripVertical, faGripLinesVertical, faBaby, faBrazilianRealSign, faBarsProgress, faBars, faVideo, faFolderBlank, faUser } from '@fortawesome/free-solid-svg-icons';  
 
const Musics = () => {
  
  return (

  <View style = {LookAndFeel.MusicList} >

    <View style = {LookAndFeel.MusicListDesign} > 
     <View >
       <Text style ={LookAndFeel.setFontColor}> The_lazy_song_-_Bruno_Mars_(sped_up)(128k)</Text>
       <Text style ={LookAndFeel.setFontColor}>Unknown Artist - Unknown Album </Text>
         </View>
       <View> 
       <FontAwesomeIcon style = {{color:'white', marginLeft: '120px'}}icon={faEllipsisVertical}/>
       </View>
        </View>

   
        <View style = {LookAndFeel.MusicListDesign} > 
     <View>
       <Text style ={LookAndFeel.setFontColor}> Speak_Now_-Taylor_Swift_(Lyrics)(128k)</Text>
       <Text style ={LookAndFeel.setFontColor}>Unknown Artist - Unknown Album </Text>
         </View>
       <View> 
       <FontAwesomeIcon style = {{color:'white', marginLeft: '157px'}}icon={faEllipsisVertical}/>
       
       </View>
        </View>

        <View style = {LookAndFeel.MusicListDesign} > 
     <View>
       <Text style ={LookAndFeel.setFontColor}>  Kolohe_Kai_Songs_ _ _The_Best_Playlist_ _ _ Reggae_Hits_ _ _C...</Text>
       <Text style ={LookAndFeel.setFontColor}>Unknown Artist - Unknown Album </Text>
         </View>
       <View> 
       <FontAwesomeIcon style = {{color:'white', marginLeft: '32px'}}icon={faEllipsisVertical}/>
       
       </View>
        </View>

        <View style = {LookAndFeel.MusicListDesign} > 
     <View>
       <Text style ={LookAndFeel.setFontColor}> First_True_Love_ _Lyrics_ _ _ _Kolobe_Kai(128k)</Text>
       <Text style ={LookAndFeel.setFontColor}>Unknown Artist - Unknown Album </Text>
         </View>
       <View> 
       <FontAwesomeIcon style = {{color:'white', marginLeft: '125px'}}icon={faEllipsisVertical}/>
      
       </View>
        </View>
        <View style = {LookAndFeel.MusicListDesign} > 
     <View>
       <Text style ={LookAndFeel.setFontColor}> James_Arthur_-_Car's_outside_(speed_up)_Lyrics(128k)</Text>
       <Text style ={LookAndFeel.setFontColor}>Unknown Artist - Unknown Album </Text>
         </View>
       <View> 
       <FontAwesomeIcon style = {{color:'white', marginLeft: '86px'}}icon={faEllipsisVertical}/>
      
       </View>
        </View>

        <View style = {LookAndFeel.MusicListDesign} > 
     <View>
       <Text style ={LookAndFeel.setFontColor}>cuanto_nada_cuesta_tanto_%5Bletra_lyrics%5D(128k)</Text>
       <Text style ={LookAndFeel.setFontColor}>Unknown Artist - Unknown Album </Text>
         </View>
       <View> 
       <FontAwesomeIcon style = {{color:'white', marginLeft: '96px'}}icon={faEllipsisVertical}/>
      
       </View>
        </View>

        <View style = {LookAndFeel.MusicListDesign} > 
     <View>
       <Text style ={LookAndFeel.setFontColor}>Spolarium(L_Y_R_I_O_S)_-_Eraserheads(128k)</Text>
       <Text style ={LookAndFeel.setFontColor}>Unknown Artist - Unknown Album </Text>
         </View>
       <View> 
       <FontAwesomeIcon style = {{color:'white', marginLeft: '135px'}}icon={faEllipsisVertical}/>
      
       </View>
        </View>

        <View style = {LookAndFeel.MusicListDesign} > 
     <View>
       <Text style ={LookAndFeel.setFontColor}> That%W2%5580%99S_What_I_Like_-_Bruno_Mars_%5Blyrics_Viet...</Text>
       <Text style ={LookAndFeel.setFontColor}>Unknown Artist - Unknown Album </Text>
         </View>
       <View> 
       <FontAwesomeIcon style = {{color:'white', marginLeft: '23px'}}icon={faEllipsisVertical}/>
      
       </View>
        </View>

        <View style = {LookAndFeel.MusicListDesign} > 
     <View>
       <Text style ={LookAndFeel.setFontColor}>Dilaw_-_Uhaw_(Lyrics_Video)(128k)</Text>
       <Text style ={LookAndFeel.setFontColor}>Unknown Artist - Unknown Album </Text>
         </View>
       <View> 
       <FontAwesomeIcon style = {{color:'white', marginLeft: '185px'}}icon={faEllipsisVertical}/>
       
       </View>
        </View>

        <View style = {[LookAndFeel.MusicListDesign, LookAndFeel.setFontColor]} > 
     <View >
       <Text style ={LookAndFeel.setFontColor}> Stephen_Sanches_-_Until_I_Found_You_(Lyrics)(128k)</Text>
       <Text style ={LookAndFeel.setFontColor}>Unknown Artist - Unknown Album </Text>
         </View>
       <View> 
     
       <FontAwesomeIcon style = {{color:'white', marginLeft: '100px'}}icon={faEllipsisVertical}/>
     
       </View>
        </View>

   
    </View>

);
}
const Menu =()=>{
  return(
    <View  >
      <View style ={[LookAndFeel.MusicListDesign, {backgroundColor: 'black', width: '400px',flex: 1,justifyContent: 'space-evenly'}]}>
     
      <Text style ={{ marginLeft: '13px', color: 'white'}}> Song</Text> 
      <Text style ={{ marginLeft: '13px', color: 'white'}}> Artist</Text> 
      <Text style ={{ marginLeft: '13px', color: 'white'}}>  Album</Text> 
      <Text style ={{ marginLeft: '13px', color: 'white'}}>  Folder</Text> 
    
     </View>
    </View>
  )
}
const SearchBAr = () =>{
       return(
     <View  style ={{flex: 1, flexDirection: 'row',backgroundColor: 'gray', width: '340px', marginLeft: '10px',borderRadius: 50}}>   
    <View style = {LookAndFeel.SearchBarContainer}>
      <View style ={[LookAndFeel.MusicListDesign, {backgroundColor: 'gray', width: '330px'}]}>
     <View> 
    <FontAwesomeIcon style = {{marginLeft: '10px' }}icon = {faMagnifyingGlass}/>
     
     </View>
      <Text style ={{ marginLeft: '13px', color: 'black'}}> Search Local Music</Text> 
     </View>
      
    </View>

<View><FontAwesomeIcon style = {{color: 'white',marginTop: '10px'}}icon = {faFolderPlus}/></View>
    </View>
)
}
 
const TopIcons =() =>{
           return(
  <View style ={LookAndFeel.MusicListDesign} >

  
      <View style = {LookAndFeel.IconsListContainer}>
        <View style = {{borderRadius: 50, marginLeft: '15px', backgroundColor: 'red', width: '25px',height: '25px',justifyContent: 'center'}}> 
       <FontAwesomeIcon style ={{color: 'white',marginLeft: '5px'}}icon = {faPlay}/>
       </View>
       </View>

      <View style = {LookAndFeel.IconsListContainer}>
        <Text style ={[LookAndFeel.setFontColor,{marginLeft: '10px',color: 'white', fontSize: '14px', fontWeight: '300',fontFamily: 'Helvetica'}]}>Play all</Text>
      </View>
      <View> 
      <Text style = {{color: 'white', marginLeft: '10px'}}> 843 song(s)</Text>
      </View>

      
        
      <View style = {{borderRadius: 50, marginLeft: '12px', backgroundColor: 'black', width: '25px',height: '25px',justifyContent: 'center'}}> 
         <FontAwesomeIcon  style = {{color: 'white', marginLeft:'175px'}}icon ={faEllipsisVertical}/>
       
       </View>  
   
  </View>

)
}

const CurrentPlaying = () =>{
  return(
<View style = {{flex: 1, flexDirection: 'row',backgroundColor: 'gray', borderRadius: 7, marginLeft: '15px', marginRight: '15px', width: '400px'}}>
  <View style ={{backgroundColor: 'white', width: '35px', borderRadius: 7}}>
    <FontAwesomeIcon style = {{marginTop: '9px', marginLeft: '8px'}} icon = {faMusic}/>
    </View> 
    <View style = {{marginLeft: '10px', marginTop:'8px', fontSize: '14px'}}>on_Wish_107.5_Bus - Unkown Artist</View>
    <View><FontAwesomeIcon style ={{marginTop: '8px', marginLeft: '25px' ,color: 'white'}} icon = {faPlay}/></View>
    <View> <FontAwesomeIcon style ={{marginTop: '8px', marginLeft: '25px' ,color: 'black'}} icon = {faPlay}/></View>
    <View> <FontAwesomeIcon style ={{marginTop: '8px', marginLeft: '-10px' ,color: 'black'}} icon = {faGripLinesVertical}/></View> 
    <View> <FontAwesomeIcon style ={{marginTop: '8px', marginLeft: '20px' ,color: 'black'}} icon = {faBars}/></View> 
      
   </View>
   

  )
}

const LastPart = ()=>{
  return(
      <View style = {{flex: 1, flexDirection: 'row', width: '400px'}}>
         
         <View><FontAwesomeIcon style ={{color: 'white' , marginTop: '8px', marginLeft: '50px'}}icon = {faVideo}/></View>
         <View><FontAwesomeIcon style ={{color: 'white' ,marginTop: '8px',marginLeft: '150px'}}icon = {faFolderBlank}/></View>
         <View><FontAwesomeIcon style ={{color: 'white' ,marginTop: '8px',marginLeft: '150px'}}icon = {faUser}/></View>
        
        
          
         
      </View>

  )
}
export default function App() {
   return (
    
  <View style={LookAndFeel.container}>
          <Menu/>
          <SearchBAr/>
          <TopIcons/>
          <Musics/>
          <CurrentPlaying/>
          <LastPart/>
          
       
      
      <StatusBar style="auto" />
       
    </View>
  );
};
