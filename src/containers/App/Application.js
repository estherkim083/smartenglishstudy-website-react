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
        <Route exact path='/smartenglishstudy-website-react' component={Home}/>
        <Route exact path='/smartenglishstudy-website-react/home' component={Home}/>
        <Route exact path='/smartenglishstudy-website-react/listening' component={ListeningMenu}/>
        <Route exact path='/smartenglishstudy-website-react/listening/listening-create-scripts/:id?' component={ListeningCreateScripts}/>
        <Route exact path='/smartenglishstudy-website-react/listening/listening-view-scripts/:id' component={ListeningViewScripts}/>
        <Route exact path='/smartenglishstudy-website-react/reading/create/:id?/:myinbox?' component={ReadingCreate}/>
        <Route exact path='/smartenglishstudy-website-react/reading/view/:id' component={ReadingView}/>
        <Route exact path='/smartenglishstudy-website-react/reading/' component={ReadingMenu}/>
        <Route exact path='/smartenglishstudy-website-react/reading/vocab' component={ReadingVocab}/>
        <Route exact path='/smartenglishstudy-website-react/my-profile' component={MyProfile}/>
        <Route exact path='/smartenglishstudy-website-react/my-inbox' component={MyInbox}/>
        <Route exact path='/smartenglishstudy-website-react/profile-peer-list' component={ProfileList}/>
        <Route exact path='/smartenglishstudy-website-react/my-peer-list' component={ProfilePeerList}/>
        <Route exact path='/smartenglishstudy-website-react/chat' component={ChatMessage}/> 
        <Route exact path='/smartenglishstudy-website-react/writing/essay' component={EssayWritingBoardList}/>
        <Route exact path='/smartenglishstudy-website-react/writing/essay/create/:id?' component={EssayRoomCreate}/>
        <Route exact path='/smartenglishstudy-website-react/writing/essay/:id' component={EssayWritingView}/>
        <Route exact path='/smartenglishstudy-website-react/writing/essay/:id/:userid/:email' component={EssayWriting}/>
        <Route exact path='/smartenglishstudy-website-react/writing/editor' component={EditorBoardList}/>
        <Route exact path='/smartenglishstudy-website-react/writing/editorpage/:label/:id' component={EditorPageView}/>
        <Route exact path='/smartenglishstudy-website-react/writing/editorpageonlyview/:label/:id' component={EditorPageOnlyView}/>
        <Route exact path='/smartenglishstudy-website-react/writing/book' component={BookWritingBoardList}/>
        <Route exact path='/smartenglishstudy-website-react/writing/book/create/:id?' component={BookWritingRoomCreate}/>
        <Route exact path='/smartenglishstudy-website-react/writing/book/:id' component={BookWritingView}/>
        <Route exact path='/smartenglishstudy-website-react/writing/book/:id/:userid/:email' component={BookWriting}/>
        <Route exact path='/smartenglishstudy-website-react/quiz/make-quiz' component={Quiz}/> 
        <Route exact path='/smartenglishstudy-website-react/quiz/make-quiz/create/:id?' component={CreateQuiz}/> 
        <Route exact path='/smartenglishstudy-website-react/quiz/make-quiz/:id' component={QuizView}/> 
        <Route exact path='/smartenglishstudy-website-react/quiz/take-quiz' component={SolveRoomList}/> 
        <Route exact path='/smartenglishstudy-website-react/quiz/take-quiz/:id' component={SolveRoom}/> 
        <Route exact path='/smartenglishstudy-website-react/quiz/take-quiz/result/:id' component={SolveRoomResultView}/> 
        <Route exact path='/smartenglishstudy-website-react/quiz/take-quiz/solve/:id' component={SolveRoomView}/> 
        <Route exact path='/smartenglishstudy-website-react/quiz/my-score' component={QuizMyScoreList}/> 
        <Route exact path='/smartenglishstudy-website-react/quiz/my-score/:id' component={QuizScoreView}/> 
        <Route exact path='/smartenglishstudy-website-react/quiz/student-score' component={QuizStudentScoreList}/> 
        <Route exact path='/smartenglishstudy-website-react/quiz/student-score/:id' component={QuizScoreView}/>  
        <Route exact path='/smartenglishstudy-website-react/vocab' component={VocabView}/>  
        <Route exact path='/smartenglishstudy-website-react/vocab/quiz-memorization' component={VocabQuiz}/> 
        <Route exact path='/smartenglishstudy-website-react/vocab/quiz-memorization/take-quiz' component={VocabQuizTakeQuiz}/> 
        <Route exact path='/smartenglishstudy-website-react/vocab/quiz-memorization/result' component={VocabQuizResult}/> 
      </Switch>
    </Dashboard>
  );
}


export default Application;