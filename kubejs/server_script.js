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
			'thermal:tin_ingot',
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
	event.remove({output: 'mekanism:tin_ingot'});
	event.remove({output: 'mekanism:lead_ingot'});
	event.remove({output: 'immersiveengineering:nickel_ingot'})
	
});

// jei hidden items
onEvent('jei.hide.items', event => {
	// Immersive Engineering
	
	event.hide('immersiveengineering:silver_ingot');
    event.hide('immersiveengineering:lead_ingot');
	event.hide('immersiveengineering:electrum_ingot');
	event.hide('immersiveengineering:constantan_ingot');
	event.hide('immersiveengineering:uranium_ingot');
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
	

	//Mekanism
	
	event.hide('mekanism:tin_ingot');
	event.hide('mekanism:lead_ingot');
	event.hide('mekanism:bronze_ingot')
	event.hide('mekanism:raw_tin');
	event.hide('mekanism raw_lead');
	event.hide('mekanism:block_raw_tin');
	event.hide('mekanism:block_raw_lead');
	event.hide('mekanism:sawdust');
	event.hide('mekanism:dust_bronze');
	event.hide('mekanism:dust_lapis_lazuli');
	event.hide('mekanism:dust_coal');
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
	event.hide('mekanism:dust_uranium');
    event.hide('lazierae2:coal_dust');
})

// jei hidden fluids
onEvent('jei.hide.fluids', event => {
	event.hide('example:fluid')
})

onEvent('item.tags', (e) => {});

// its mket time