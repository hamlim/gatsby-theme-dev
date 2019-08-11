import React from 'react'

import Notes from '../components/notes'

export default function NotesTemplate({
  pageContext: { groupedNotes, urls, breadcrumbs, siteTitle },
  ...props
}) {
  return (
    <Notes
      directories={groupedNotes}
      files={urls}
      breadcrumbs={breadcrumbs}
      siteTitle={siteTitle}
      {...props}
    />
  )
}
