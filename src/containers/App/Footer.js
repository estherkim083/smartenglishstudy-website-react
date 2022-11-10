import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { alpha } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(15),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		}
	},
	footerdiv: {
		background: alpha(theme.palette.primary.main, 0.8),
		width: '100%',
	}
}));

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" style={{color: '#fff'}} align="center">
			{'Copyright © '}
			<Link color="inherit" href="http://localhost:3000/smartenglishstudy-website-react">
				SmartEnglishWebsite
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const footers = [
	{
		title: '리딩& 리스닝& 글쓰기',
		description: [
			'리스닝자료실', 
			'리딩자료실', 
			'리딩단어장', 
			'EssayWriting',
			'BookWriting', 
			'첨삭자료실'
		],
		links: [
			'/listening',
			'/reading',
			'/reading/vocab',
			'/writing/essay',
			'/writing/book',
			'/writing/editor'
		]
	},
	{
		title: '퀴즈(Quiz)',
		description: [
			'출제하기',
			'성적',
			'문제풀이실',
			'나의성적'
		],
		links: [
			'/quiz/make-quiz',
			'/quiz/student-score',
			'/quiz/take-quiz',
			'/quiz/my-score'
		]
	},
	{
		title: '단어장',
		description: [
			'단어장',
			'어휘퀴즈'
		],
		links: [
			'vocab',
			'/vocab/quiz-memorization'
		]
	},
	{
		title: '마이페이지',
		description: [
			'프로필조회', 
			'친구/그룹조회', 
			'메세지', 
			'MyProfile',
			'MyInbox'
		],
		links: [
			'/profile-peer-list',
			'/my-peer-list',
			'/chat',
			'/my-profile',
			'/my-inbox'
		]
	},
	{
		title: 'ABOUT',
		description: ['기능소개'],
		links: [
			'/home'
		]
	},
];

function Footer() {
	const classes = useStyles();
	return (
		<div className={classes.footerdiv}>
		<React.Fragment>
			<Container maxWidth="2100px" component="footer" className={classes.footer}>
				<Grid container spacing={4} justify="space-evenly">
					{footers.map((footer) => (
						<Grid item xs={2} key={footer.title}>
							<Typography variant="h6" color="textPrimary" style={{fontFamily:'CookieRun-Regular', fontSize:'18px', color: '#fff'}} gutterBottom>
								{footer.title}
							</Typography>
							<ul>
								{footer.description.map((item, index) => (
									<li key={item} style={{marginTop: '10px', color:'#fff'}}>
										<Link href={footer.links[index]} variant="subtitle1"  style={{fontFamily:'CookieRun-Regular', fontSize:'15px', color: '#fff'}} color="textSecondary">
											{item}
										</Link>
									</li>
								))}
							</ul>
						</Grid>
					))}
				</Grid>
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
		</React.Fragment>
		</div>
	);
}

export default Footer;