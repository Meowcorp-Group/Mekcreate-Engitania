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
		'mekanism:diamond',
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

	e.recipes.createMixing('create:rose_quartz', [
		'minecraft:quartz',
		Fluid.of('thermal:redstone', 800),
	]);

	e.recipes.createMixing('thermal:signalum_dust', [
		'3x thermal:copper_dust',
		'thermal:tin_dust',
		Fluid.of('thermal:redstone', 400),
	]);

	// Thermal recipes
	e.recipes.thermalSmelter('2x create:brass_ingot', [
		'minecraft:copper_ingot',
		'create:zinc_ingot',
	]);
});

onEvent('item.tags', (e) => {});
