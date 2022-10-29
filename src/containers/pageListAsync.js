

import React from 'react';
import Loading from '../components/Loading';
import loadable from '../utils/loadable';

export const Login = loadable(() =>
  import ('./Pages/Users/Login'), {
    fallback: <Loading />,
});
export const Register = loadable(() =>
    import ('./Pages/Users/Register'), {
    fallback: <Loading />,
});
export const ListeningMenu = loadable(() =>
    import ('./Pages/ListeningTab/ListeningMenu'), {
    fallback: <Loading />,
});
export const ListeningCreateScripts = loadable(() =>
    import ('./Pages/ListeningTab/ListeningCreateScripts'), {
    fallback: <Loading />,
});
export const ListeningViewScripts = loadable(() =>
    import ('./Pages/ListeningTab/ListeningViewScripts'), {
    fallback: <Loading />,
});
export const ReadingCreate = loadable(() =>
    import ('./Pages/ReadingTab/ReadingCreate'), {
    fallback: <Loading />,
});
export const ReadingView = loadable(() =>
    import ('./Pages/ReadingTab/ReadingView'), {
    fallback: <Loading />,
});
export const ReadingMenu = loadable(() =>
    import ('./Pages/ReadingTab/ReadingMenu'), {
    fallback: <Loading />,
});
export const ReadingVocab = loadable(() =>
    import ('./Pages/ReadingTab/ReadingVocab'), {
    fallback: <Loading />,
}); 
export const MyProfile = loadable(() =>
    import ('./Pages/MyPage/MyProfile'), {
    fallback: <Loading />,
}); 
export const MyInbox = loadable(() =>
    import ('./Pages/MyPage/MyInbox'), {
    fallback: <Loading />, 
}); 
export const ProfileList = loadable(() =>
    import ('./Pages/MyPage/ProfileList'), {
    fallback: <Loading />, 
}); 
export const ProfilePeerList = loadable(() =>
    import ('./Pages/MyPage/ProfilePeerList'), {
    fallback: <Loading />, 
}); 
export const ChatMessage = loadable(() =>
    import ('./Pages/MyPage/ChatMessage'), {
    fallback: <Loading />, 
}); 
export const EssayWritingBoardList = loadable(() =>
    import ('./Pages/WritingTab/EssayWritingBoardList'), {
    fallback: <Loading />, 
});  
export const EssayWritingView = loadable(() =>
    import ('./Pages/WritingTab/EssayWritingView'), {
    fallback: <Loading />, 
}); 
export const EssayWriting = loadable(() =>
    import ('./Pages/WritingTab/EssayWriting'), {
    fallback: <Loading />, 
}); 
export const EssayRoomCreate = loadable(() =>
    import ('./Pages/WritingTab/EssayRoomCreate'), {
    fallback: <Loading />, 
}); 
export const EditorBoardList = loadable(() =>
    import ('./Pages/WritingEditorTab/EditorBoardList'), {
    fallback: <Loading />, 
});
export const EditorPageView = loadable(() =>
    import ('./Pages/WritingEditorTab/EditorPageView'), {
    fallback: <Loading />, 
});
export const EditorPageOnlyView = loadable(() =>
    import ('./Pages/WritingEditorTab/EditorPageOnlyView'), {
    fallback: <Loading />, 
});
export const BookWritingBoardList = loadable(() =>
    import ('./Pages/BookWritingTab/BookWritingBoardList'), {
    fallback: <Loading />, 
});
export const BookWritingRoomCreate = loadable(() =>
    import ('./Pages/BookWritingTab/BookWritingRoomCreate'), {
    fallback: <Loading />, 
});
export const BookWritingView = loadable(() =>
    import ('./Pages/BookWritingTab/BookWritingView'), {
    fallback: <Loading />, 
});
export const BookWriting = loadable(() =>
    import ('./Pages/BookWritingTab/BookWriting'), {
    fallback: <Loading />, 
});
export const Quiz = loadable(() =>
    import ('./Pages/QuizTab/Quiz'), {
    fallback: <Loading />, 
});
export const CreateQuiz = loadable(() =>
    import ('./Pages/QuizTab/CreateQuiz'), {
    fallback: <Loading />, 
});
export const QuizView = loadable(() =>
    import ('./Pages/QuizTab/QuizView'), {
    fallback: <Loading />, 
});
export const SolveRoomList = loadable(() =>
    import ('./Pages/QuizTab/SolveRoomList'), {
    fallback: <Loading />, 
});
export const SolveRoomView = loadable(() =>
    import ('./Pages/QuizTab/SolveRoomView'), {
    fallback: <Loading />, 
});
export const SolveRoom = loadable(() =>
    import ('./Pages/QuizTab/SolveRoom'), {
    fallback: <Loading />, 
}); 
export const SolveRoomResultView = loadable(() =>
    import ('./Pages/QuizTab/SolveRoomResultView'), {
    fallback: <Loading />, 
});
export const QuizMyScoreList = loadable(() =>
    import ('./Pages/QuizTab/QuizMyScoreList'), {
    fallback: <Loading />, 
}); 
export const QuizScoreView = loadable(() =>
    import ('./Pages/QuizTab/QuizScoreView'), {
    fallback: <Loading />, 
});
export const QuizStudentScoreList = loadable(() =>
    import ('./Pages/QuizTab/QuizStudentScoreList'), {
    fallback: <Loading />, 
}); 
export const VocabView = loadable(() =>
    import ('./Pages/Vocab/VocabView'), {
    fallback: <Loading />, 
});
export const VocabQuiz = loadable(() =>
    import ('./Pages/Vocab/VocabQuiz'), {
    fallback: <Loading />, 
});
export const VocabQuizTakeQuiz = loadable(() =>
    import ('./Pages/Vocab/VocabQuizTakeQuiz'), {
    fallback: <Loading />, 
});
export const VocabQuizResult = loadable(() =>
    import ('./Pages/Vocab/VocabQuizResult'), {
    fallback: <Loading />, 
});