import React, { useContext } from 'react';
import Dashboard from '../Templates/Dashboard';
import { ThemeContext } from './ThemeWrapper';
import { Switch, Route, useHistory } from 'react-router-dom';
import {ListeningMenu, ListeningCreateScripts, ListeningViewScripts, ReadingCreate, ReadingView, ReadingMenu, ReadingVocab, MyProfile, MyInbox, ProfileList, ProfilePeerList, ChatMessage, EssayWritingBoardList, EssayWritingView, EssayWriting, EssayRoomCreate, EditorBoardList, EditorPageView, EditorPageOnlyView, BookWritingBoardList, BookWritingRoomCreate, BookWritingView, BookWriting, Quiz, CreateQuiz, QuizView, SolveRoomList, SolveRoomView, SolveRoom, SolveRoomResultView, QuizMyScoreList, QuizScoreView, QuizStudentScoreList, VocabView, VocabQuiz, VocabQuizTakeQuiz, VocabQuizResult} from '../pageListAsync';
import Home from './Home';

function Application(props) {
  const changeMode = useContext(ThemeContext);
  // const { history } = props;
  let history= useHistory();

  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/listening' component={ListeningMenu}/>
        <Route exact path='/listening/listening-create-scripts/:id?' component={ListeningCreateScripts}/>
        <Route exact path='/listening/listening-view-scripts/:id' component={ListeningViewScripts}/>
        <Route exact path='/reading/create/:id?/:myinbox?' component={ReadingCreate}/>
        <Route exact path='/reading/view/:id' component={ReadingView}/>
        <Route exact path='/reading/' component={ReadingMenu}/>
        <Route exact path='/reading/vocab' component={ReadingVocab}/>
        <Route exact path='/my-profile' component={MyProfile}/>
        <Route exact path='/my-inbox' component={MyInbox}/>
        <Route exact path='/profile-peer-list' component={ProfileList}/>
        <Route exact path='/my-peer-list' component={ProfilePeerList}/>
        <Route exact path='/chat' component={ChatMessage}/> 
        <Route exact path='/writing/essay' component={EssayWritingBoardList}/>
        <Route exact path='/writing/essay/create/:id?' component={EssayRoomCreate}/>
        <Route exact path='/writing/essay/:id' component={EssayWritingView}/>
        <Route exact path='/writing/essay/:id/:userid/:email' component={EssayWriting}/>
        <Route exact path='/writing/editor' component={EditorBoardList}/>
        <Route exact path='/writing/editorpage/:label/:id' component={EditorPageView}/>
        <Route exact path='/writing/editorpageonlyview/:label/:id' component={EditorPageOnlyView}/>
        <Route exact path='/writing/book' component={BookWritingBoardList}/>
        <Route exact path='/writing/book/create/:id?' component={BookWritingRoomCreate}/>
        <Route exact path='/writing/book/:id' component={BookWritingView}/>
        <Route exact path='/writing/book/:id/:userid/:email' component={BookWriting}/>
        <Route exact path='/quiz/make-quiz' component={Quiz}/> 
        <Route exact path='/quiz/make-quiz/create/:id?' component={CreateQuiz}/> 
        <Route exact path='/quiz/make-quiz/:id' component={QuizView}/> 
        <Route exact path='/quiz/take-quiz' component={SolveRoomList}/> 
        <Route exact path='/quiz/take-quiz/:id' component={SolveRoom}/> 
        <Route exact path='/quiz/take-quiz/result/:id' component={SolveRoomResultView}/> 
        <Route exact path='/quiz/take-quiz/solve/:id' component={SolveRoomView}/> 
        <Route exact path='/quiz/my-score' component={QuizMyScoreList}/> 
        <Route exact path='/quiz/my-score/:id' component={QuizScoreView}/> 
        <Route exact path='/quiz/student-score' component={QuizStudentScoreList}/> 
        <Route exact path='/quiz/student-score/:id' component={QuizScoreView}/>  
        <Route exact path='/vocab' component={VocabView}/>  
        <Route exact path='/vocab/quiz-memorization' component={VocabQuiz}/> 
        <Route exact path='/vocab/quiz-memorization/take-quiz' component={VocabQuizTakeQuiz}/> 
        <Route exact path='/vocab/quiz-memorization/result' component={VocabQuizResult}/> 
      </Switch>
    </Dashboard>
  );
}


export default Application;