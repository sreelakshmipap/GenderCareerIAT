define(['pipAPI', 'https://github.com/sreelakshmipap/GenderCareerIAT/blob/main/ChigignTobiyaGenCarAmharicIAT.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'ሙያ', //Will appear in the data.
			title : {
				media : {word : 'ሙያ'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'ሙያ'},
				{word: 'ኮርፖሬሽን'},
				{word: 'ደመወዝ'},
				{word: 'ቢሮ'},
				{word: 'ባለሙያ'},
				{word: 'አስተዳደር'},
				{word: 'ንግድ'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'ቤተሰብ', //Will appear in the data.
			title : {
				media : {word : 'ቤተሰብ'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'ሰርግ'},
				{word: 'ትዳር'},
				{word: 'ወላጆች'},
				{word: 'ዘመዶች'},
				{word: 'ቤተሰብ'},
				{word: 'ቤት'}, 
				{word: 'ልጆች'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'Male',
			title : {
				media : {word : 'Male'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'Elias'},
				{word: 'Binyam'},
				{word: 'Tesfahun'},
				{word: 'Girma'},
				{word: 'Addisu'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Female',
			title : {
				media : {word : 'Female'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'Eden'},
				{word: 'Aster'},
				{word: 'Almaz'},
				{word: 'Sara'},
				{word: 'Fikir'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});