/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLecturer = /* GraphQL */ `
  subscription OnCreateLecturer($filter: ModelSubscriptionLecturerFilterInput) {
    onCreateLecturer(filter: $filter) {
      id
      name
      expertise
      isFullTime
      currentWorkload
      maxConcurrentInstances
      assignedInstances {
        nextToken
        __typename
      }
      schedules {
        nextToken
        __typename
      }
      availabilities {
        nextToken
        __typename
      }
      reports {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLecturer = /* GraphQL */ `
  subscription OnUpdateLecturer($filter: ModelSubscriptionLecturerFilterInput) {
    onUpdateLecturer(filter: $filter) {
      id
      name
      expertise
      isFullTime
      currentWorkload
      maxConcurrentInstances
      assignedInstances {
        nextToken
        __typename
      }
      schedules {
        nextToken
        __typename
      }
      availabilities {
        nextToken
        __typename
      }
      reports {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLecturer = /* GraphQL */ `
  subscription OnDeleteLecturer($filter: ModelSubscriptionLecturerFilterInput) {
    onDeleteLecturer(filter: $filter) {
      id
      name
      expertise
      isFullTime
      currentWorkload
      maxConcurrentInstances
      assignedInstances {
        nextToken
        __typename
      }
      schedules {
        nextToken
        __typename
      }
      availabilities {
        nextToken
        __typename
      }
      reports {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject($filter: ModelSubscriptionSubjectFilterInput) {
    onCreateSubject(filter: $filter) {
      id
      name
      difficultyLevel
      instances {
        nextToken
        __typename
      }
      reports {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject($filter: ModelSubscriptionSubjectFilterInput) {
    onUpdateSubject(filter: $filter) {
      id
      name
      difficultyLevel
      instances {
        nextToken
        __typename
      }
      reports {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject($filter: ModelSubscriptionSubjectFilterInput) {
    onDeleteSubject(filter: $filter) {
      id
      name
      difficultyLevel
      instances {
        nextToken
        __typename
      }
      reports {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSubjectInstance = /* GraphQL */ `
  subscription OnCreateSubjectInstance(
    $filter: ModelSubscriptionSubjectInstanceFilterInput
  ) {
    onCreateSubjectInstance(filter: $filter) {
      id
      subjectId
      startDate
      duration
      lecturerId
      numberOfStudents
      hasSupport
      isCurrentlyDeveloping
      subject {
        id
        name
        difficultyLevel
        createdAt
        updatedAt
        __typename
      }
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      schedules {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSubjectInstance = /* GraphQL */ `
  subscription OnUpdateSubjectInstance(
    $filter: ModelSubscriptionSubjectInstanceFilterInput
  ) {
    onUpdateSubjectInstance(filter: $filter) {
      id
      subjectId
      startDate
      duration
      lecturerId
      numberOfStudents
      hasSupport
      isCurrentlyDeveloping
      subject {
        id
        name
        difficultyLevel
        createdAt
        updatedAt
        __typename
      }
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      schedules {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSubjectInstance = /* GraphQL */ `
  subscription OnDeleteSubjectInstance(
    $filter: ModelSubscriptionSubjectInstanceFilterInput
  ) {
    onDeleteSubjectInstance(filter: $filter) {
      id
      subjectId
      startDate
      duration
      lecturerId
      numberOfStudents
      hasSupport
      isCurrentlyDeveloping
      subject {
        id
        name
        difficultyLevel
        createdAt
        updatedAt
        __typename
      }
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      schedules {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onCreateSchedule(filter: $filter) {
      id
      lecturerId
      subjectInstanceId
      status
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      subjectInstance {
        id
        subjectId
        startDate
        duration
        lecturerId
        numberOfStudents
        hasSupport
        isCurrentlyDeveloping
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onUpdateSchedule(filter: $filter) {
      id
      lecturerId
      subjectInstanceId
      status
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      subjectInstance {
        id
        subjectId
        startDate
        duration
        lecturerId
        numberOfStudents
        hasSupport
        isCurrentlyDeveloping
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onDeleteSchedule(filter: $filter) {
      id
      lecturerId
      subjectInstanceId
      status
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      subjectInstance {
        id
        subjectId
        startDate
        duration
        lecturerId
        numberOfStudents
        hasSupport
        isCurrentlyDeveloping
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAvailability = /* GraphQL */ `
  subscription OnCreateAvailability(
    $filter: ModelSubscriptionAvailabilityFilterInput
  ) {
    onCreateAvailability(filter: $filter) {
      id
      lecturerId
      startDate
      endDate
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAvailability = /* GraphQL */ `
  subscription OnUpdateAvailability(
    $filter: ModelSubscriptionAvailabilityFilterInput
  ) {
    onUpdateAvailability(filter: $filter) {
      id
      lecturerId
      startDate
      endDate
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAvailability = /* GraphQL */ `
  subscription OnDeleteAvailability(
    $filter: ModelSubscriptionAvailabilityFilterInput
  ) {
    onDeleteAvailability(filter: $filter) {
      id
      lecturerId
      startDate
      endDate
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
    onCreateReport(filter: $filter) {
      id
      lecturerId
      subjectId
      createdDate
      content
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      subject {
        id
        name
        difficultyLevel
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
    onUpdateReport(filter: $filter) {
      id
      lecturerId
      subjectId
      createdDate
      content
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      subject {
        id
        name
        difficultyLevel
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
    onDeleteReport(filter: $filter) {
      id
      lecturerId
      subjectId
      createdDate
      content
      lecturer {
        id
        name
        expertise
        isFullTime
        currentWorkload
        maxConcurrentInstances
        createdAt
        updatedAt
        __typename
      }
      subject {
        id
        name
        difficultyLevel
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
