define(['pipAPI', 'https://sreelakshmipap.github.io/GenderCareerIAT/quiat9Amharic.js'], function(APIConstructor, iatExtension){
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
			name : 'ወንድ',
			title : {
				media : {word : 'ወንድ'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'ኤሊያስ'},
				{word: 'ቢንያም'},
				{word: 'ተስፋሁን'},
				{word: 'ግርማ'},
				{word: 'አዲሱ'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'ሴት',
			title : {
				media : {word : 'ሴት'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'ኤደን'},
				{word: 'አስቴር'},
				{word: 'አልማዝ'},
				{word: 'ሳራ'},
				{word: 'ፍቅር'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://sreelakshmipap.github.io/GenderCareerIAT/image/'
		} 
	});
});
