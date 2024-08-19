/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLecturer = /* GraphQL */ `
  mutation CreateLecturer(
    $input: CreateLecturerInput!
    $condition: ModelLecturerConditionInput
  ) {
    createLecturer(input: $input, condition: $condition) {
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
export const updateLecturer = /* GraphQL */ `
  mutation UpdateLecturer(
    $input: UpdateLecturerInput!
    $condition: ModelLecturerConditionInput
  ) {
    updateLecturer(input: $input, condition: $condition) {
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
export const deleteLecturer = /* GraphQL */ `
  mutation DeleteLecturer(
    $input: DeleteLecturerInput!
    $condition: ModelLecturerConditionInput
  ) {
    deleteLecturer(input: $input, condition: $condition) {
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
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
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
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
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
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
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
export const createSubjectInstance = /* GraphQL */ `
  mutation CreateSubjectInstance(
    $input: CreateSubjectInstanceInput!
    $condition: ModelSubjectInstanceConditionInput
  ) {
    createSubjectInstance(input: $input, condition: $condition) {
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
export const updateSubjectInstance = /* GraphQL */ `
  mutation UpdateSubjectInstance(
    $input: UpdateSubjectInstanceInput!
    $condition: ModelSubjectInstanceConditionInput
  ) {
    updateSubjectInstance(input: $input, condition: $condition) {
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
export const deleteSubjectInstance = /* GraphQL */ `
  mutation DeleteSubjectInstance(
    $input: DeleteSubjectInstanceInput!
    $condition: ModelSubjectInstanceConditionInput
  ) {
    deleteSubjectInstance(input: $input, condition: $condition) {
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
export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $input: CreateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    createSchedule(input: $input, condition: $condition) {
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
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $input: UpdateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    updateSchedule(input: $input, condition: $condition) {
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
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $input: DeleteScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    deleteSchedule(input: $input, condition: $condition) {
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
export const createAvailability = /* GraphQL */ `
  mutation CreateAvailability(
    $input: CreateAvailabilityInput!
    $condition: ModelAvailabilityConditionInput
  ) {
    createAvailability(input: $input, condition: $condition) {
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
export const updateAvailability = /* GraphQL */ `
  mutation UpdateAvailability(
    $input: UpdateAvailabilityInput!
    $condition: ModelAvailabilityConditionInput
  ) {
    updateAvailability(input: $input, condition: $condition) {
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
export const deleteAvailability = /* GraphQL */ `
  mutation DeleteAvailability(
    $input: DeleteAvailabilityInput!
    $condition: ModelAvailabilityConditionInput
  ) {
    deleteAvailability(input: $input, condition: $condition) {
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
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
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
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
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
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
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
