import { Navigate } from 'react-router-dom';
import { auth } from './../firebase';
import { PropTypes } from 'prop-types';

/** 사용자가 누구인지 판별 
 * 로그인 되있으면 home
 * 안되어있으면 login
 */
function ProtectedRoute({children}) {

// function ProtectedRoute({
//     children,
// }: {
//     children: React.ReactNode;
// })

// 'children' is missing in props validation 이라 뜨지만 되는 이유?
// props type을 검사해줘야 함

const user = auth.currentUser;

    if (!user) {
        return <Navigate to="/login"></Navigate>;
    }
    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node
};

export default ProtectedRoute