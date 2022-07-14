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
			Fluid.of('thermal:redstone', 800),
		])
		.heated();

	e.recipes.createMixing('thermal:signalum_dust', [
		'3x thermal:copper_dust',
		'thermal:silver_dust',
		Fluid.of('thermal:redstone', 400),
	]);

	// Thermal recipes

	e.recipes.thermalSmelter('2x create:brass_ingot', [
		'minecraft:copper_ingot',
		'create:zinc_ingot',
	]);

	// Immersive Engineering removed recipes

	e.remove({ output: 'immersiveengineering:constantan_ingot' });
	e.remove({ output: 'immersiveengineering:electrum_ingot' });
	e.remove({ output: 'immersiveengineering:nickel_ingot' });
	e.remove({ output: 'immersiveengineering:silver_ingot' });
	e.remove({ output: 'immersiveengineering:lead_ingot' });
	e.remove({ output: 'immersiveengineering:uranium_ingot' });
	e.remove({ output: 'immersiveengineering:raw_nickel' });
	e.remove({ output: 'immersiveengineering:raw_silver' });
	e.remove({ output: 'immersiveengineering:raw_lead' });
	e.remove({ output: 'immersiveengineering:raw_uranium' });
	e.remove({ output: 'immersiveengineering:raw_block_nickel' });
	e.remove({ output: 'immersiveengineering:raw_block_silver' });
	e.remove({ output: 'immersiveengineering:raw_block_lead' });
	e.remove({ output: 'immersiveengineering:raw_block_uranium' });
	e.remove({ output: 'immersiveengineering:dust_iron' });
	e.remove({ output: 'immersiveengineering:dust_copper' });
	e.remove({ output: 'immersiveengineering:dust_gold' });
	e.remove({ output: 'immersiveengineering:dust_uranium' });
	e.remove({ output: 'immersiveengineering:dust_nickel' });
	e.remove({ output: 'immersiveengineering:dust_lead' });
	e.remove({ output: 'immersiveengineering:dust_silver' });
	e.remove({ output: 'immersiveengineering:dust_constantan' });
	e.remove({ output: 'immersiveengineering:dust_electrum' });
	e.remove({ output: 'immersiveengineering:dust_steel' });
	e.remove({ output: 'immersiveengineering:dust_wood' });
	e.remove({ output: 'immersiveengineering:dust_sulfur' });
	e.remove({ output: 'immersiveengineering:dust_saltpeter' });

	// Mekanism removed recipes

	e.remove({ output: 'mekanism:tin_ingot' });
	e.remove({ output: 'mekanism:lead_ingot' });
	e.remove({ output: 'mekanism:bronze_ingot' });
	e.remove({ output: 'mekanism:raw_tin' });
	e.remove({ output: 'mekanism:raw_lead' });
	e.remove({ output: 'mekanism:block_raw_tin' });
	e.remove({ output: 'mekanism:block_raw_lead' });
	e.remove({ output: 'mekanism:sawdust' });
	e.remove({ output: 'mekanism:dust_iron' });
	e.remove({ output: 'mekanism:dust_gold' });
	e.remove({ output: 'mekanism:dust_copper' });
	e.remove({ output: 'mekanism:dust_tin' });
	e.remove({ output: 'mekanism:dust_lapis_lazuli' });
	e.remove({ output: 'mekanism:dust_quartz' });
	e.remove({ output: 'mekanism:dust_diamond' });
	e.remove({ output: 'mekanism:dust_emerald' });
	e.remove({ output: 'mekanism:dust_netherite' });
	e.remove({ output: 'mekanism:dust_bronze' });
	e.remove({ output: 'mekanism:dust_sulfur' });

	// LazierAE2

	e.remove({ output: 'lazierae2:coal_dust' });
});

// jei hidden items
onEvent('jei.hide.items', (e) => {
	// Immersive Engineering

	e.hide('immersiveengineering:silver_ingot');
	e.hide('immersiveengineering:lead_ingot');
	e.hide('immersiveengineering:electrum_ingot');
	e.hide('immersiveengineering:constantan_ingot');
	e.hide('immersiveengineering:uranium_ingot');
	e.hide('immersiveengineering:nickel_ingot');
	e.hide('immersiveengineering:ore_lead');
	e.hide('immersiveengineering:ore_uranium');
	e.hide('immersiveengineering:ore_silver');
	e.hide('immersiveengineering:ore_nickel');
	e.hide('immersiveengineering:deepslate_ore_lead');
	e.hide('immersiveengineering:deepslate_ore_uranium');
	e.hide('immersiveengineering:deepslate_ore_silver');
	e.hide('immersiveengineering:deepslate_ore_nickel');
	e.hide('immersiveengineering:raw_silver');
	e.hide('immersiveengineering:raw_nickel');
	e.hide('immersiveengineering:raw_uranium');
	e.hide('immersiveengineering:raw_lead');
	e.hide('immersiveengineering:raw_block_lead');
	e.hide('immersiveengineering:raw_block_silver');
	e.hide('immersiveengineering:raw_block_nickel');
	e.hide('immersiveengineering:raw_block_uranium');
	e.hide('immersiveengineering:dust_copper');
	e.hide('immersiveengineering:dust_iron');
	e.hide('immersiveengineering:dust_gold');
	e.hide('immersiveengineering:dust_lead');
	e.hide('immersiveengineering:dust_silver');
	e.hide('immersiveengineering:dust_nickel');
	e.hide('immersiveengineering:dust_uranium');
	e.hide('immersiveengineering:dust_constantan');
	e.hide('immersiveengineering:dust_electrum');
	e.hide('immersiveengineering:dust_steel');
	e.hide('immersiveengineering:dust_wood');
	e.hide('immersiveengineering:dust_sulfur');
	e.hide('immersiveengineering:dust_saltpeter');

	//Mekanism

	e.hide('mekanism:tin_ingot');
	e.hide('mekanism:lead_ingot');
	e.hide('mekanism:bronze_ingot');
	e.hide('mekanism:tin_ore');
	e.hide('mekanism:lead_ore');
	e.hide('mekanism:raw_tin');
	e.hide('mekanism raw_lead');
	e.hide('mekanism:block_raw_tin');
	e.hide('mekanism:block_raw_lead');
	e.hide('mekanism:sawdust');
	e.hide('mekanism:dust_bronze');
	e.hide('mekanism:dust_lapis_lazuli');
	e.hide('mekanism:dust_quartz');
	e.hide('mekanism:dust_diamond');
	e.hide('mekanism:dust_emerald');
	e.hide('mekanism:dust_netherite');
	e.hide('mekanism:dust_sulfur');
	e.hide('mekanism:dust_iron');
	e.hide('mekanism:dust_gold');
	e.hide('mekanism:dust_copper');
	e.hide('mekanism:dust_tin');
	e.hide('mekanism:dust_lead');

	//Lazier AE2

	e.hide('lazierae2:coal_dust');
});

// jei hidden fluids
onEvent('jei.hide.fluids', (e) => {});

onEvent('item.tags', (e) => {});

// its mket time
// its mket time
