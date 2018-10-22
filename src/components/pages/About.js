import React from 'react'

export default function About(props) {
  return (
    <div>
      <h1 className="display-4">About Contant Manager</h1>
      <p>{props.match.params.id} </p>
      <p className="lead">Simple to Manage Contact</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  )
}
