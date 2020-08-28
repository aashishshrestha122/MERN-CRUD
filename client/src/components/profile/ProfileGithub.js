import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGithubRepos } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos(username)]);
  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">Github Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div key={repo._id} className="repo bg-white p-1 my-1">
            <div>
              <h4>
<<<<<<< HEAD
<<<<<<< HEAD
                <a href={repo.html_url} target="_blank" rel="noopener norefer">
=======
=======
>>>>>>> fb91f2ec6a61a8fa5b8b17a9dd21091c9eee7e4d
                <a
                  href={`http://${repo.html_url}`}
                  target="_blank"
                  rel="noopener norefer"
                >
<<<<<<< HEAD
>>>>>>> fb91f2ec6a61a8fa5b8b17a9dd21091c9eee7e4d
=======
>>>>>>> fb91f2ec6a61a8fa5b8b17a9dd21091c9eee7e4d
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">
                  Stars : {repo.stargazers_count}
                </li>
                <li className="badge badge-dark">
                  Watchers : {repo.watchers_count}
                </li>
                <li className="badge badge-light">
                  Forks : {repo.forks_count}
                </li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
