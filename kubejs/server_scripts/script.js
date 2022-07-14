// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info('hi guys welcome back to another kubejs loading session');
console.info('                                            ,(##(,');
console.info('                                        /&&&&%((%&&&&/');
console.info('                                #&&%/(&&&&.        ,&&&.');
console.info('           %&&%.                  *#%%(.            ,&&#');
console.info('       .#&&&&&&&@,                                  /&@/');
console.info('     #&&@&&&&&&&&&,            ./&@&&&&&@&#*     ./&&&/');
console.info('  .%&&&/ #&&&&&&&&(         *&&&&&&&&&&&&&&&&&&&&&&&,');
console.info('  ,&&&&&&&&&&&&&&&&&#,  ,#&&&&&&&&&&&&&&&&&&&&&,');
console.info('     *(#&@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&(');
console.info('          ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&#');
console.info('          ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%.');
console.info('          ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&(');
console.info('          *&&&&&&&&&&&&&&&&&&&#.  /@&&&&&&&&&&&&&&(,');
console.info('         /&&&&&&&&&&&&&&@&/         (@&&&&&&&&&&&&&&.');
console.info('       /@&&&&%,.&&&&&&/               #&&&&&%  ,&&&&.');
console.info('     *&&&&%.     &&&&&/                .&&&&%   /@&&.');
console.info(',&&&&&@#         .&&&&/                ,@&&&,   *&&&.');
console.info('                 /&&&&/           .%&%&&&#');
console.info('thanks guys for listening to this kubejs loading session');

onEvent('recipes', (e) => {
	// Mekanism infusing recipes
	e.recipes.mekanismMetallurgicInfusing(
		'plane:diamond_reinforced_iron',
		'2x minecraft:iron_ingot',
		'44x mekanism:diamond',
		440
	);
	e.recipes.mekanismMetallurgicInfusing(
		'thermal:electrum_ingot',
		'thermal:silver_ingot',
		'mekanism:gold',
		10
	);
	e.recipes.mekanismMetallurgicInfusing(
		'thermal:bronze_dust',
		'3x thermal:copper_dust',
		'mekanism:tin',
		10
	);

	// Mekanism Sawing Recipes

    e.recipes.mekanismSawing(
		'#minecraft:planks',
		'minecraft:stick',
		'#forge:dust/wood'
	)

	// Create mixing recipes
	e.recipes
		.createMixing('4x thermal:bronze_ingot', [
			'3x minecraft:copper_ingot',
			'thermal:tin_ingot',
		])
		.heated();

	e.recipes
		.createMixing('3x thermal:invar_ingot', [
			'2x minecraft:iron_ingot',
			'thermal:nickel_ingot',
		])
		.heated();

	e.recipes
		.createMixing('2x thermal:electrum_ingot', [
			'minecraft:gold_ingot',
			'thermal:silver_ingot',
		])
		.heated();

	e.recipes
		.createMixing('2x thermal:constantan_ingot', [
			'minecraft:copper_ingot',
			'thermal:nickel_ingot',
		])
		.heated();

	e.recipes
		.createMixing('4x thermal:signalum_ingot', [
			'3x minecraft:copper_ingot',
			'thermal:silver_ingot',
			'4x minecraft:redstone',
		])
		.heated();

	e.recipes
		.createMixing('4x thermal:lumium_ingot', [
			'3x thermal:tin_ingot',
			'thermal:silver_ingot',
			'2x minecraft:glowstone_dust',
		])
		.heated();

	e.recipes
		.createMixing('4x thermal:enderium_ingot', [
			'3x thermal:lead_ingot',
			'thermal:diamond_dust',
			'#forge:ender_pearls',
		])
		.heated();

	e.recipes
		.createMixing('create:rose_quartz', [
			'minecraft:quartz',
			Fluid.of('thermal:redstone', 800)
		])
		.heated();

	e.recipes.createMixing('thermal:signalum_dust', [
		'3x thermal:copper_dust',
		'thermal:silver_dust',
		Fluid.of('thermal:redstone', 400)
	]);

	// Thermal recipes
	e.recipes.thermalSmelter('2x create:brass_ingot', [
		'minecraft:copper_ingot',
		'create:zinc_ingot',
	]);

	// removed recipes here
	
	// Immersive Engineering

	//input
	event.remove({input: 'immersiveengineering:ingot_constantan'});
	event.remove({input: 'immersiveengineering:ingot_electrum'});
	event.remove({input: 'immersiveengineering:ingot_nickel'});
	event.remove({input: 'immersiveengineering:ingot_silver'});
	event.remove({input: 'immersiveengineering:ingot_lead'});
	event.remove({input: 'immersiveengineering:ingot_uranium'});
	event.remove({input: 'immersiveengineering:nugget_constantan'})
	event.remove({input: 'immersiveengineering:nugget_electrum'})
	event.remove({input: 'immersiveengineering:nugget_nickel'})
	event.remove({input: 'immersiveengineering:nugget_silver'})
	event.remove({input: 'immersiveengineering:nugget_lead'})
	event.remove({input: 'immersiveengineering:nugget_uranium'})
	event.remove({input: 'immersiveengineering:raw_nickel'})
	event.remove({input: 'immersiveengineering:raw_silver'});
	event.remove({input: 'immersiveengineering:raw_lead'});
	event.remove({input: 'immersiveengineering:raw_uranium'});
	event.remove({input: 'immersiveengineering:raw_block_nickel'});
	event.remove({input: 'immersiveengineering:raw_block_silver'});
	event.remove({input: 'immersiveengineering:raw_block_lead'});
	event.remove({input: 'immersiveengineering:raw_block_uranium'});
	event.remove({input: 'immersiveengineering:dust_iron'});
	event.remove({input: 'immersiveengineering:dust_copper'});
	event.remove({input: 'immersiveengineering:dust_gold'});
	event.remove({input: 'immersiveengineering:dust_uranium'});
	event.remove({input: 'immersiveengineering:dust_nickel'});
	event.remove({input: 'immersiveengineering:dust_lead'});
	event.remove({input: 'immersiveengineering:dust_silver'});
	event.remove({input: 'immersiveengineering:dust_constantan'});
	event.remove({input: 'immersiveengineering:dust_electrum'});
	event.remove({input: 'immersiveengineering:dust_steel'});
	event.remove({input: 'immersiveengineering:dust_wood'});
	event.remove({input: 'immersiveengineering:dust_sulfur'});
	event.remove({input: 'immersiveengineering:dust_saltpeter'});
    
	//output
	event.remove({output: 'immersiveengineering:ingot_constantan'});
	event.remove({output: 'immersiveengineering:ingot_electrum'});
	event.remove({output: 'immersiveengineering:ingot_nickel'});
	event.remove({output: 'immersiveengineering:ingot_silver'});
	event.remove({output: 'immersiveengineering:ingot_lead'});
	event.remove({output: 'immersiveengineering:ingot_uranium'});
	event.remove({output: 'immersiveengineering:raw_nickel'})
	event.remove({output: 'immersiveengineering:raw_silver'});
	event.remove({output: 'immersiveengineering:raw_lead'});
	event.remove({output: 'immersiveengineering:raw_uranium'});
	event.remove({output: 'immersiveengineering:raw_block_nickel'});
	event.remove({output: 'immersiveengineering:raw_block_silver'});
	event.remove({output: 'immersiveengineering:raw_block_lead'});
	event.remove({output: 'immersiveengineering:raw_block_uranium'});
	event.remove({output: 'immersiveengineering:dust_iron'});
	event.remove({output: 'immersiveengineering:dust_copper'});
	event.remove({output: 'immersiveengineering:dust_gold'});
	event.remove({output: 'immersiveengineering:dust_uranium'});
	event.remove({output: 'immersiveengineering:dust_nickel'});
	event.remove({output: 'immersiveengineering:dust_lead'});
	event.remove({output: 'immersiveengineering:dust_silver'});
	event.remove({output: 'immersiveengineering:dust_constantan'});
	event.remove({output: 'immersiveengineering:dust_electrum'});
	event.remove({output: 'immersiveengineering:dust_steel'});
	event.remove({output: 'immersiveengineering:dust_wood'});
	event.remove({output: 'immersiveengineering:dust_sulfur'});
	event.remove({output: 'immersiveengineering:dust_saltpeter'});

	// Mekanism

    //input
	event.remove({input: 'mekanism:tin_ingot'});
	event.remove({input: 'mekanism:lead_ingot'});
	event.remove({input: 'mekanism:bronze_ingot'});
	event.remove({input: 'mekanism:nugget_tin'})
    event.remove({input: 'mekanism:nugget_lead'})
    event.remove({input: 'mekanism:nugget_bronze'})
	event.remove({input: 'mekanism:raw_tin'});
	event.remove({input: 'mekanism:raw_lead'});
	event.remove({input: 'mekanism:block_raw_tin'});
	event.remove({input: 'mekanism:block_raw_lead'});
	event.remove({input: 'mekanism:sawdust'});
	event.remove({input: 'mekanism:dust_iron'});
	event.remove({input: 'mekanism:dust_gold'});
	event.remove({input: 'mekanism:dust_copper'});
	event.remove({input: 'mekanism:dust_tin'});
	event.remove({input: 'mekanism:dust_lapis_lazuli'});
	event.remove({input: 'mekanism:dust_quartz'});
	event.remove({input: 'mekanism:dust_diamond'});
	event.remove({input: 'mekanism:dust_emerald'});
	event.remove({input: 'mekanism:dust_netherite'});
	event.remove({input: 'mekanism:dust_bronze'});
	event.remove({input: 'mekanism:dust_sulfur'});

	//output
	event.remove({output: 'mekanism:tin_ingot'});
	event.remove({output: 'mekanism:lead_ingot'});
	event.remove({output: 'mekanism:bronze_ingot'});
	event.remove({output: 'mekanism:nugget_tin'})
    event.remove({output: 'mekanism:nugget_lead'})
    event.remove({output: 'mekanism:nugget_bronze'})
	event.remove({output: 'mekanism:raw_tin'});
	event.remove({output: 'mekanism:raw_lead'});
	event.remove({output: 'mekanism:block_raw_tin'});
	event.remove({output: 'mekanism:block_raw_lead'});
	event.remove({output: 'mekanism:sawdust'});
	event.remove({output: 'mekanism:dust_iron'});
	event.remove({output: 'mekanism:dust_gold'});
	event.remove({output: 'mekanism:dust_copper'});
	event.remove({output: 'mekanism:dust_tin'});
	event.remove({output: 'mekanism:dust_lapis_lazuli'});
	event.remove({output: 'mekanism:dust_quartz'});
	event.remove({output: 'mekanism:dust_diamond'});
	event.remove({output: 'mekanism:dust_emerald'});
	event.remove({output: 'mekanism:dust_netherite'});
	event.remove({output: 'mekanism:dust_bronze'});
	event.remove({output: 'mekanism:dust_sulfur'});
    
	// Lazier AE2

	event.remove({input: 'lazierae2:coal_dust'});
	event.remove({output: 'lazierae2:coal_dust'});

});

// jei hidden items
onEvent('jei.hide.items', event => {
	
	// Immersive Engineering
	
	event.hide('immersiveengineering:ingot_silver');
    event.hide('immersiveengineering:ingot_lead');
	event.hide('immersiveengineering:ingot_electrum');
	event.hide('immersiveengineering:ingot_constantan');
	event.hide('immersiveengineering:ingot_uranium');
	event.hide('immersiveengineering:ingot_nickel');
	event.hide('immersiveengineering:nugget_silver')
    event.hide('immersiveengineering:nugget_lead')
    event.hide('immersiveengineering:nugget_electrum')
    event.hide('immersiveengineering:nugget_constantan')
    event.hide('immersiveengineering:nugget_uranium')
    event.hide('immersiveengineering:nugget_nickel')
	event.hide('immersiveengineering:ore_lead');
	event.hide('immersiveengineering:ore_uranium');
	event.hide('immersiveengineering:ore_silver');
	event.hide('immersiveengineering:ore_nickel');
	event.hide('immersiveengineering:deepslate_ore_lead');
	event.hide('immersiveengineering:deepslate_ore_uranium');
	event.hide('immersiveengineering:deepslate_ore_silver');
	event.hide('immersiveengineering:deepslate_ore_nickel');
	event.hide('immersiveengineering:raw_silver');
	event.hide('immersiveengineering:raw_nickel');
	event.hide('immersiveengineering:raw_uranium');
	event.hide('immersiveengineering:raw_lead');
	event.hide('immersiveengineering:raw_block_lead');
	event.hide('immersiveengineering:raw_block_silver');
	event.hide('immersiveengineering:raw_block_nickel');
	event.hide('immersiveengineering:raw_block_uranium');
    event.hide('immersiveengineering:dust_copper');
	event.hide('immersiveengineering:dust_iron');
	event.hide('immersiveengineering:dust_gold');
	event.hide('immersiveengineering:dust_lead');
	event.hide('immersiveengineering:dust_silver');
	event.hide('immersiveengineering:dust_nickel');
	event.hide('immersiveengineering:dust_uranium');
	event.hide('immersiveengineering:dust_constantan');
	event.hide('immersiveengineering:dust_electrum');
	event.hide('immersiveengineering:dust_steel')
	event.hide('immersiveengineering:dust_wood');
	event.hide('immersiveengineering:dust_sulfur');
	event.hide('immersiveengineering:dust_saltpeter');

	//Mekanism
	
	event.hide('mekanism:tin_ingot');
	event.hide('mekanism:lead_ingot');
	event.hide('mekanism:bronze_ingot')
    event.hide('mekanism:nugget_tin')
    event.hide('mekanism:nugget_lead') 
    event.hide('mekanism:nugget_bronze')
	event.hide('mekanism:tin_ore');
	event.hide('mekanism:lead_ore');
	event.hide('mekanism:raw_tin');
	event.hide('mekanism raw_lead');
	event.hide('mekanism:block_raw_tin');
	event.hide('mekanism:block_raw_lead');
	event.hide('mekanism:sawdust');
	event.hide('mekanism:dust_bronze');
	event.hide('mekanism:dust_lapis_lazuli');
	event.hide('mekanism:dust_quartz');
	event.hide('mekanism:dust_diamond');
	event.hide('mekanism:dust_emerald');
	event.hide('mekanism:dust_netherite');
	event.hide('mekanism:dust_sulfur');
	event.hide('mekanism:dust_iron');
	event.hide('mekanism:dust_gold');
	event.hide('mekanism:dust_copper');
	event.hide('mekanism:dust_tin');
	event.hide('mekanism:dust_lead');
    
	//Lazier AE2
	
	event.hide('lazierae2:coal_dust');
})

// jei hidden fluids
onEvent('jei.hide.fluids', event => {
	event.hide('example:fluid')
})

onEvent('item.tags', (e) => {});

// its mket time