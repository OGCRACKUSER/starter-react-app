import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { TiLockClosedOutline, TiImageOutline, TiKeyOutline } from "react-icons/ti";
import { IoIosBody } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box min-width="100px" min-height="100px">
			<Section padding="80px 0 80px 0" sm-padding="60px 0px 60px 0px" background="rgba(0, 0, 0, 0.95)">
				<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
				<Box
					display="flex"
					width="50%"
					flex-direction="column"
					justify-content="flex-start"
					align-items="flex-start"
					lg-width="100%"
					lg-align-items="flex-start"
					lg-margin="0px 0px 60px 0px"
					sm-margin="0px 0px 40px 0px"
					sm-padding="0px 0px 0px 0px"
					padding="24px 0px 16px 0px"
					lg-flex-direction="row"
					lg-flex-wrap="wrap"
				>
					<Text
						margin="0px 0px 24px 0px"
						color="--primary"
						font="--headline1"
						lg-text-align="center"
						sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						lg-width="100%"
					>
						Ins0mnia.gg
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="#ffffff"
						font="--lead"
						lg-text-align="center"
						lg-width="100%"
					>
						Ins0mnia.gg - is a high-quality DLC for csgo 2020 that will help you easily defeat your opponent and also visually improve the game
					</Text>
					<Link href="#" color="#0066ff">
						DISCORD
					</Link>
					<Box
						display="flex"
						align-items="flex-start"
						lg-width="50%"
						lg-padding="0px 0px 0px 16px"
						md-width="100%"
						md-padding="0px 0px 0px 0px"
					/>
				</Box>
				<Box
					display="flex"
					width="50%"
					justify-content="flex-end"
					overflow-y="hidden"
					overflow-x="hidden"
					lg-width="100%"
					padding="0px 0px 0px 16px"
					align-items="center"
					lg-justify-content="center"
					lg-padding="0px 0px 0px 0px"
				>
					<Image src="https://uploads.quarkly.io/63c18229f0019100228deee9/images/forsite.png?v=2023-01-13T16:19:52.761Z" display="block" />
				</Box>
			</Section>
		</Box>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="#111111">
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="24px 4%" md-grid-template-columns="1fr">
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="ti"
						icon={TiLockClosedOutline}
						margin="0px 0px 16px 0px"
						color="--primary"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--primary" font="--headline3" lg-text-align="left">
						Protection
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="#ffffff"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						server protection and loader protection are used all user data is stored on our servers which are securely protected
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="io"
						icon={IoIosBody}
						margin="0px 0px 16px 0px"
						color="--primary"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--primary" font="--headline3" lg-text-align="left">
						Aimbot
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="#ffffff"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						in Ins0mnia.gg there is a very powerful ragebot that can fight back against your opponents
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="ti"
						icon={TiImageOutline}
						margin="0px 0px 16px 0px"
						color="--primary"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--primary" font="--headline3" lg-text-align="left">
						Visuals
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="#ffffff"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" margin="0px 0px 0px 0px" background="#111111">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				flex-direction="column"
				margin="0px 0px 0px 0px"
				width="50%"
				padding="0px 40px 0px 15px"
				lg-padding="0px 0px 0px 0px"
				lg-width="100%"
				lg-margin="0px 0px 60px 0px"
			>
				<Text margin="0px 0px 24px 0px" color="#0091ff" font="--headline1" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
					Price
				</Text>
				<Text margin="0px 0px 0px 0px" color="--lightD2" font="--lead">
					our product is available to everyone at an adequate price
				</Text>
			</Box>
			<Box
				display="flex"
				flex-direction="column"
				margin="0px 0px 0px 0px"
				width="50%"
				sm-margin="0px 0px 30px 0px"
				padding="0px 0px 0px 0px"
				lg-padding="0px 0px 0px 0px"
				lg-width="100%"
			>
				<Box display="flex" flex-direction="column" margin="0px 0px 48px 0px">
					<Box display="flex" align-items="center" margin="0px 0px 16px 0px">
						<Icon
							category="ti"
							icon={TiKeyOutline}
							size="64px"
							border-color="#ffffff"
							color="#0091ff"
							hover-color="#0071ff"
						/>
						<Text margin="0px 0px 0px 0px" color="#0091ff" font="--headline2" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							$5.00
						</Text>
					</Box>
					<Box padding="0px 0px 0px 104px" sm-padding="0px 0px 0px 64px">
						<Text margin="0px 0px 16px 0px" color="#ffffff" font="--lead" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
							Beta
						</Text>
						<Text margin="0px 0px 0px 0px" color="--lightD2" font="--lead">
							Early acces to DLC updates & etc
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="#111111">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 56px 0px"
				width="100%"
				sm-margin="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--primary"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Reviews
				</Text>
				<Text margin="0px 0px 0px 0px" color="--lightD2" text-align="center" font="--lead">
					Pay me only $5 and maybe you will get here
				</Text>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				align-items="stretch"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box
					margin="0px 30px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						I believe that this product is worthy of the attention of aliens at the moment I'm sitting on my yacht and enjoying life.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/63c18229f0019100228deee9/images/16495714.jpg?v=2023-01-13T16:47:08.528Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Gravel1337
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								Developer
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					margin="0px 30px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 0px 0px 15px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						I have never seen such a product before thanks to gravel may Jesus Christ protect you.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/63c18229f0019100228deee9/images/d4d00b4a738d2219.jpg?v=2023-01-13T16:49:23.321Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								MaxDint
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								Beta Tester
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					margin="0px 30px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					lg-margin="40px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						At the moment I am the best beta tester of ins0mnia, no matter what anyone tells me, but I think so ins0mnia &gt; all.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/63c18229f0019100228deee9/images/Screenshot_2.png?v=2023-01-13T16:51:12.204Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								MXPP
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								Beta Tester
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					lg-padding="0px 0px 0px 15px"
					lg-margin="40px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						Guys, who will go into phasmophobia?
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://images.unsplash.com/photo-1673368777914-a3bdac42c5e0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&h=2000"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Luvv1337
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								Lua coder & Admin
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"63c18229f0019100228deee7"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});