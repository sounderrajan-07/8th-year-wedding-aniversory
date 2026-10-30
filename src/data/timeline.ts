import { TimelineMilestone } from '../types';

/**
 * காதல் கதை காலவரிசை (Love Story Timeline)
 * பயனரின் உண்மைப் புகைப்படங்கள் மற்றும் நிகழ்வுகளை மட்டுமே அடிப்படையாகக் கொண்டது.
 * எந்தவொரு கற்பனைத் தேதிகளும் சேர்க்கப்படவில்லை.
 * பயனர் விரும்பினால் கூடுதல் மைல்கற்களை எளிதாக இதில் சேர்த்துக் கொள்ளலாம்.
 */
export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'milestone-wedding',
    yearTa: 'திருமண நாள்',
    titleTa: 'மாங்கல்ய பந்தம் — புதிய வாழ்க்கையின் தொடக்கம்',
    subtitleTa: 'இரு மனங்கள் இணைந்த புனிதம்',
    descriptionTa: 'பெரியோர்களின் ஆசிகளுடன், மேள தாளங்கள் முழங்க, மலர் மாலைகள் சூடி தங்களின் இல்வாழ்க்கைப் பயணத்தை அன்புடன் தொடங்கிய இனிய பொன் தருணம்.',
    photoSrc: '/images/wedding/wedding_ceremony.jpg',
    iconName: 'HeartHandshake'
  },
  {
    id: 'milestone-parenthood',
    yearTa: 'புதிய வசந்தம்',
    titleTa: 'அன்பின் மலர்ச்சி — தாய்மை தருணம்',
    subtitleTa: 'நம் இல்லத்தில் புதிய உயிர் மலர்ந்த இன்பம்',
    descriptionTa: 'குடும்பத்தின் மகிழ்ச்சியை இரட்டிப்பாக்கும் வரமாய், புது சொந்தத்தின் வரவை அன்போடும் அரவணைப்போடும் எதிர்பார்த்திருந்த பொற்காலம்.',
    photoSrc: '/images/romance/forehead_kiss.jpg',
    iconName: 'Baby'
  },
  {
    id: 'milestone-family',
    yearTa: 'குடும்பப் பாசம்',
    titleTa: 'இரண்டு இதயங்கள்… அழகான ஒரு குடும்பம்!',
    subtitleTa: 'ஒன்றாகச் சிரித்த தருணங்கள்',
    descriptionTa: 'இல்லற வாழ்வில் ஒருவர் மீது ஒருவர் வைத்திருக்கும் மாறாத நேசமும், குடும்பமாக இணைந்து கொண்டாடிய ஒவ்வொரு கணமும் பொக்கிஷமாய் நிலைத்திருக்கிறது.',
    photoSrc: '/images/family/family_home.jpg',
    iconName: 'Home'
  },
  {
    id: 'milestone-8th-anniversary',
    yearTa: '8ஆம் ஆண்டு',
    titleTa: 'எட்டு ஆண்டுகள்… என்றும் தொடரும் காதல்!',
    subtitleTa: 'வெள்ளி விழா நோக்கிய பொன் பயணம்',
    descriptionTa: 'எட்டு ஆண்டுகள் கடந்தாலும் முதல் நாள் மலர்ந்த அதே அன்பு குறையாமல், இன்றும் என்றும் நீடிக்கும் உன்னதமான திருமண பந்தத்தின் கொண்டாட்டம்.',
    photoSrc: '/images/romance/looking_with_love.jpg',
    iconName: 'Sparkles'
  }
];
