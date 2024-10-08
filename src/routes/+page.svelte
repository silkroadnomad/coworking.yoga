<script>
	import NameInput from '$lib/components/nameInput.svelte'
	let title = `Coworking.yoga`
	let description = "Yoga First Working Environments";
	const url = "ipns://coworking.yoga"
	// let image = "/nasa-Q1p7bh3SHj8-unsplash.jpg"
	const favicon = "./favicon.png"
</script>

<svelte:head>
	<title>{title } {__APP_VERSION__}</title>
	<link rel="icon" type="image/svg" href={favicon} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
<!--	<meta property="og:image" content={image} />-->
	<meta property="og:url" content={url} />
	<meta name="description" content={description}/>
	<meta name="twitter:card" content={description} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
<!--	<meta name="twitter:image" content={image} />-->
</svelte:head>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Doichain - Simplified Name-Value Storage</title>
<!--	<script src="https://cdn.tailwindcss.com"></script>-->
	<link rel="icon" href="https://www.doichain.org/wp-content/uploads/2024/05/bildmarke.png" sizes="32x32">
	<link rel="icon" href="https://www.doichain.org/wp-content/uploads/2024/05/bildmarke.png" sizes="192x192">
	<link rel="apple-touch-icon" href="https://www.doichain.org/wp-content/uploads/2024/05/bildmarke.png">
	<meta name="msapplication-TileImage" content="https://www.doichain.org/wp-content/uploads/2024/05/bildmarke.png">
	<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap" rel="stylesheet">
	<style>
		body {
			font-family: 'Lexend', sans-serif;
		}
	</style>
</head>
<body class="bg-white text-gray-900 flex flex-col min-h-screen">

<!-- Hero Section -->
<section class="flex items-center justify-center flex-grow">
	<div class="text-center max-w-4xl mx-auto px-4">
		<!-- Logo -->
<!--		<div class="flex justify-center mb-12">-->
<!--			<div class="bg-gray-900 rounded-full p-4">-->
<!--				<img src="/doichain_logo-min.svg" alt="Doichain Logo" class="h-16">-->
<!--			</div>-->
<!--		</div>-->

		<!-- Title -->
		<h1 class="text-6xl font-medium mb-2 tracking-tight">Coworking.yoga</h1>
		<h1 class="text-3xl font-mediumtext-gray-600 mb-12">Yoga First Working Environments</h1>

		<p class="text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
			Yoga integrated workspaces from yama & niyama to asnana,
			pranayama and samadi while mastering your working schedule.
		</p>
<!--		&lt;!&ndash; Description &ndash;&gt;-->
<!--		<p class="text-xl mb-6 max-w-2xl mx-auto leading-relaxed">-->
<!--			"When I was practicing yoga, I often had to make a choice between work & yoga:<br/>-->
<!--			Either I worked too much and forgot about my yoga practice-->
<!--			or when I was in intensive practice, I tend to forgot about the requirements of work"-->
<!--		</p>-->

		<p class="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
			In between Yoga Ashrams and Yoga studios there is a new path.
		</p>

		<p>Coming soon - still in meditation</p>

<!--		<NameInput/>-->
	</div>
</section>

<!-- Navigation Section -->
<!--<section class="flex justify-center items-center pb-8">-->
<!--	<div class="px-7 bg-white shadow-lg rounded-2xl mb-5 max-w-md w-full">-->
<!--		<div class="flex">-->
<!--			<div class="flex-auto group">-->
<!--				<a href="#/" class="nav-link flex items-center justify-center text-center mx-auto px-4 py-2 text-gray-900 hover:bg-gray-200 rounded-full transition duration-300 ease-in-out">-->
<!--					<span class="block">Discover</span>-->
<!--				</a>-->
<!--			</div>-->
<!--			<div class="flex-auto group">-->
<!--				<a href="#/use" class="nav-link flex items-center justify-center text-center mx-auto px-4 py-2 text-gray-900 hover:bg-gray-200 rounded-full transition duration-300 ease-in-out">-->
<!--					<span class="block">Use</span>-->
<!--				</a>-->
<!--			</div>-->
<!--			<div class="flex-auto group">-->
<!--				<a href="#/build" class="nav-link flex items-center justify-center text-center mx-auto px-4 py-2 text-gray-900 hover:bg-gray-200 rounded-full transition duration-300 ease-in-out">-->
<!--					<span class="block">Build</span>-->
<!--				</a>-->
<!--			</div>-->
<!--			<div class="flex-auto group">-->
<!--				<a href="#/get-funded" class="nav-link flex items-center justify-center text-center mx-auto px-4 py-2 text-gray-900 hover:bg-gray-200 rounded-full transition duration-300 ease-in-out">-->
<!--					<span class="block">Get Funded</span>-->
<!--				</a>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
<!--</section>-->

</body>
<style>
    @import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap');
    body {
        font-family: 'Poppins', sans-serif;
    }

    .nav-link {
        font-size: 14px; /* Starting font size */
        transition: font-size 0.3s ease; /* Smooth transition for font size */
    }

    .nav-link:hover {
        font-size: 16px; /* Larger font size on hover */
    }
</style>
