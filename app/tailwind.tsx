import { SafeAreaView } from 'react-native-safe-area-context';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useAudioPlayer } from 'expo-audio';
import { Button } from 'react-native';
import { useEvent } from 'expo';

export default function HalamanUtama() {

    const videoSource =
        'https://rr3---sn-in2pq-jb3z.googlevideo.com/videoplayback?expire=1761818874&ei=muQCaaXHD8OFy_sPitHygQs&ip=82.26.212.53&id=o-AGSOjhfiHUcQX2UI2P_Hmu7EfuMCGcsaehYb--ygIXHN&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=0&rms=au%2Cau&bui=AdEuB5Q9kkojf2QJ0N7YHJGQSDNWOPrFAE-YWsUuZMe3vRfpRB900_JkpmXNd-QxNv2bQJ6LRCtSuFsy&spc=6b0G_DohvaEsLvgxw72UXrBbtmIljWJXV6FKJEi_gOkOYxBsWicCPcLKt_rSRh76P50&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&cnr=14&ratebypass=yes&dur=1067.839&lmt=1749194114082245&fexp=24350737,24350827,24351316,24351318,24351528,24351596,24352157,24352916,24352918,24352961,24353009,24353011,24353127,24353227,24353229,24353287,24353289,24353701,24353703,24353795,24353797,24353964,24353966,24354011,24354013,24354055,24354057,24354131,24354133,51552689,51565115,51565682,51580968&c=ANDROID&txp=4538534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAPv90JpZc1PRB-qnfe1cKyrVePL93pnN5vI1luF6TlXbAiBpsltZwt6CFuGJzkZwaaE0B9ojnOibj1O_QtnAH2wZ-A%3D%3D&redirect_counter=1&rm=sn-q4fe6y7s&rrc=104&req_id=ceb9e1521cdca3ee&cms_redirect=yes&ipbypass=yes&met=1761797279,&mh=6B&mip=103.115.29.170&mm=31&mn=sn-in2pq-jb3z&ms=au&mt=1761796876&mv=m&mvi=3&pl=24&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRQIhAJTXoqtZ-68BFyBYeRu0F6tpxKMimPRnGkpi3mrYu8jtAiAyS2Dz03sYNDc6bqfFoUkG2u0sfpCVD8uA0lD858dKMw%3D%3D';


    const audioSource =
        'https://rr3---sn-in2pq-jb3z.googlevideo.com/videoplayback?expire=1761818874&ei=muQCaaXHD8OFy_sPitHygQs&ip=82.26.212.53&id=o-AGSOjhfiHUcQX2UI2P_Hmu7EfuMCGcsaehYb--ygIXHN&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=0&rms=au%2Cau&bui=AdEuB5Q9kkojf2QJ0N7YHJGQSDNWOPrFAE-YWsUuZMe3vRfpRB900_JkpmXNd-QxNv2bQJ6LRCtSuFsy&spc=6b0G_DohvaEsLvgxw72UXrBbtmIljWJXV6FKJEi_gOkOYxBsWicCPcLKt_rSRh76P50&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&cnr=14&ratebypass=yes&dur=1067.839&lmt=1749194114082245&fexp=24350737,24350827,24351316,24351318,24351528,24351596,24352157,24352916,24352918,24352961,24353009,24353011,24353127,24353227,24353229,24353287,24353289,24353701,24353703,24353795,24353797,24353964,24353966,24354011,24354013,24354055,24354057,24354131,24354133,51552689,51565115,51565682,51580968&c=ANDROID&txp=4538534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAPv90JpZc1PRB-qnfe1cKyrVePL93pnN5vI1luF6TlXbAiBpsltZwt6CFuGJzkZwaaE0B9ojnOibj1O_QtnAH2wZ-A%3D%3D&redirect_counter=1&rm=sn-q4fe6y7s&rrc=104&req_id=ceb9e1521cdca3ee&cms_redirect=yes&ipbypass=yes&met=1761797279,&mh=6B&mip=103.115.29.170&mm=31&mn=sn-in2pq-jb3z&ms=au&mt=1761796876&mv=m&mvi=3&pl=24&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRQIhAJTXoqtZ-68BFyBYeRu0F6tpxKMimPRnGkpi3mrYu8jtAiAyS2Dz03sYNDc6bqfFoUkG2u0sfpCVD8uA0lD858dKMw%3D%3D';


    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    const playerAudio = useAudioPlayer(audioSource);

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <VideoView
                player={player}
                style={{
                    width: 350,   // ubah ukuran lebar video
                    height: 250,  // ubah ukuran tinggi video
                    borderRadius: 10,
                    backgroundColor: '#000',
                }}
                allowsFullscreen
                allowsPictureInPicture
            />

            <Button

                title={isPlaying ? 'Pause' : 'Play'}
                onPress={() => {
                    if (isPlaying) {
                        player.pause();
                    } else {
                        player.play();
                    }
                }}
            />
            <Button
                title="Play Sound"
                onPress={() => {
                    playerAudio.seekTo(0);
                    playerAudio.play();
                }}
            />
        </SafeAreaView>
    );
}
